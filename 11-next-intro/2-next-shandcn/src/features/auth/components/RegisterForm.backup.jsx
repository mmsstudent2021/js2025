"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border w-[400px] bg-white p-10"
    >
      <h1 className=" font-bold text-2xl font-serif mb-8 underline">
        Student Register Form
      </h1>
      <div className="  flex flex-col gap-4">
        <div>
          <Label className=" mb-2" htmlFor="your_name">
            Your Name
          </Label>
          <Input type="text" id="your_name" {...register("your_name")} />
        </div>
        <div>
          <Label className=" mb-2" htmlFor="your_email">
            Your Email
          </Label>
          <Input type="email" id="your_email" {...register("your_email")} />
        </div>
        <div>
          <Label className=" mb-2">Nationality</Label>
          <Select onValueChange={(value) => setValue("nationality", value)}>
            <SelectTrigger className=" w-full">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="myanmar">Myanmar</SelectItem>
              <SelectItem value="thai">Thai</SelectItem>
              <SelectItem value="japan">Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className=" mb-2" htmlFor="password">
            Password
          </Label>
          <Input type="password" id="password" {...register("password")} />
        </div>
        <div className=" mb-5">
          <Label className=" mb-2" htmlFor="confirm_password">
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirm_password"
            {...register("confirm_password")}
          />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox id="terms" {...register("terms")} />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className=" flex gap-3">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Register Now
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
