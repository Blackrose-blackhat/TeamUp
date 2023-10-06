"use client";

import React, { ChangeEvent } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {TagsInput} from "react-tag-input-component"


import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { Button } from "../ui/button";
import Image from "next/image";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from "@/lib/uploadthing";
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname, useRouter } from "next/navigation";
import { connectToDB } from "@/lib/mongoose";
interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    Gender: string;
    skills: string[];
    institutionName: string;
    institutionAddress: string;
    image: string;
    year: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  const [selected, setSelected] = useState<string[]>([]); 

  const [files, setfiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      username: user?.username || "",
      skills: user?.skills || [""],
      institutionAddress: user?.institutionAddress || "",
      institutionName: user?.institutionName || "",
      gender: user?.Gender || "",
      year: user?.year || "",
    },
  });
  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    console.log(values.skills)
  
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].fileUrl) {
        values.profile_photo = imgRes[0].fileUrl;
      }
    }

    await updateUser(
      user.id,
      values.username,
      values.year,
      values.gender,
      values.skills,
      values.profile_photo,
      pathname
    );
    
      console.log(user?.id);
    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
    
  };

  const handleImageChange = async (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setfiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col justify-start gap-5 space-y-8"
        >
          <FormField
            control={form.control}
            name="profile_photo"
            render={({ field }) => (
              <FormItem className="flex items-center gap-4 ">
                <FormLabel className="account-form_image-label">
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt="profile_photo"
                      height={96}
                      width={96}
                      priority
                      className="rounded-full object-contain  "
                    />
                  ) : (
                    <Image
                      src="/assets/profile.svg"
                      alt="profile_photo"
                      height={96}
                      width={96}
                      className="rounded-full object-contain bg-slate-200 p-3"
                    />
                  )}
                </FormLabel>
                <FormControl className="flex-1 text-semibold ">
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="upload a photo"
                    className="p-2"
                    onChange={(e) => handleImageChange(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem >
                <FormLabel>
                  Username
                </FormLabel>
                <FormControl className=" text-semibold ">
                  <input
                    type="text"
                    className=" w-full focus:outline-none p-2 bg-white rounded-md text-slate-700"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select year..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="passout">Passout</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel >
                  Skills
                </FormLabel>
                <FormControl >
                <TagsInput 
                value={selected}
                onChange={field.onChange}
                name="tags"
                placeHolder="tags"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-[#4452BD] hover:bg-blue-600   " type="submit">
            {btnTitle}
          </Button>
          
        </form>
      </Form>
      
    </>
  );
};
export default AccountProfile;
