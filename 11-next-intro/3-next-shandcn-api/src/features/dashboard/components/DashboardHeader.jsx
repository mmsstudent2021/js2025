"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const StepUi = ({ title, href }) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
    </>
  );
};

const DashboardHeader = ({ steps = [], currentPageTitle = "" }) => {
  const router = useRouter();

  return (
    <header className=" flex justify-between items-center px-5 py-2 border-b">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {steps.map((step, index) => (
            <StepUi key={index} title={step.title} href={step.href} />
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPageTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" flex gap-2">
        <Button onClick={() => router.back()} variant="outline" size="icon">
          <ChevronLeft />
        </Button>
        <Button onClick={() => router.forward()} variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
