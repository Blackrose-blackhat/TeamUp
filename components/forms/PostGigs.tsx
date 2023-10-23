"use client"
import { useState } from "react";
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

import * as z from "zod";
import { useForm } from "react-hook-form";
import { GigValidation } from "@/lib/validations/gig";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../ui/button";
import Image from "next/image";
import { TagsInput } from "react-tag-input-component";
import { usePathname, useRouter } from "next/navigation";
import { connectToDB } from "@/lib/mongoose";
import { Textarea } from "../ui/textarea";
import { createGig } from "@/lib/actions/Gigs.action";
interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    Gender: string;
    skills: [];
    institutionName: string;
    institutionAddress: string;
    image: string;
    year: string;
  };
  btnTitle: string;
}

function PostGigs({ userId }: { userId: string }) {
  const [selected, setSelected] = useState<string[]>([]);
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(GigValidation),
    defaultValues: {
      gigs: "",
      accountId: userId,
      requirement: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof GigValidation>) => {
    await createGig({
      text: values.gigs,
      author:userId,
      path:pathname,
      tags:values.requirement,
    });
    router.push("/")
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col justify-start gap-5 space-y-8 mt-5 "
      >
        <FormField
          control={form.control}
          name="gigs"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2 text-sm text-slate-500">
                post the requirement
              </FormLabel>
              <FormControl className=" text-semibold ">
                <Textarea
                  rows={15}
                  className=" w-full focus:outline-none  p-2 bg-white rounded-md text-slate-700"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="requirement"
          
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-2 text-sm text-slate-500">
                post the requirement
              </FormLabel>
              <FormControl className=" text-semibold ">
                <TagsInput
                  value={selected}
                  onChange={field.onChange}
                  placeHolder="tags"
                 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="text-sm md:text-lg">
          Post gig
        </Button>
      </form>
    </Form>
  );
}
export default PostGigs;
