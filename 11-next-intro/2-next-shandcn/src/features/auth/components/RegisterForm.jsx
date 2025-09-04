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
import { useForm, Controller } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border w-[400px] bg-white p-10"
    >
      <h1 className="font-bold text-2xl font-serif mb-8 underline">
        Student Register Form
      </h1>

      <div className="flex flex-col gap-4">
        <div>
          <Label className="mb-2" htmlFor="your_name">
            Your Name
          </Label>
          <Input type="text" id="your_name" {...register("your_name", { required: "Name is required" })} />
          {errors.your_name && (
            <p className="text-red-500 text-sm mt-1">{errors.your_name.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-2" htmlFor="your_email">
            Your Email
          </Label>
          <Input type="email" id="your_email" {...register("your_email", { required: "Email is required" })} />
          {errors.your_email && (
            <p className="text-red-500 text-sm mt-1">{errors.your_email.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-2">Nationality</Label>
          <Controller
            name="nationality"
            control={control}
            rules={{ required: "Nationality is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="myanmar">Myanmar</SelectItem>
                  <SelectItem value="thai">Thai</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
          )}
        </div>

        <div>
          <Label className="mb-2" htmlFor="password">
            Password
          </Label>
          <Input type="password" id="password" {...register("password", { required: "Password is required" })} />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-5">
          <Label className="mb-2" htmlFor="confirm_password">
            Confirm Password
          </Label>
          <Input
            type="password"
            id="confirm_password"
            {...register("confirm_password", { required: "Confirm password is required" })}
          />
          {errors.confirm_password && (
            <p className="text-red-500 text-sm mt-1">{errors.confirm_password.message}</p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Checkbox id="terms" {...register("terms", { required: "You must accept the terms" })} />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        {errors.terms && (
          <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
        )}

        <div className="flex gap-3">
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
