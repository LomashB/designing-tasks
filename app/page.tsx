"use client";

import { Check, History, Search, Settings, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingInput } from "./components/FloatingInput";

const sidebarItems = [
  { icon: User, label: "Software Engineer" },
  { icon: User, label: "Computer engineer" },
  { icon: User, label: "Network Engineer" },
  { icon: User, label: "Technical Support" },
  { icon: User, label: "Network administrator" },
  { icon: History, label: "Management" },
  { icon: History, label: "Data analysis" },
  { icon: History, label: "Computer technician" },
];

const boards = [
  "Board 1",
  "Board 2",
  "Board 3",
  "Board agent 1",
  "Board agent 1",
  "Board agent 1",
];

export default function AccountSettings() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-[280px] hidden md:block border-r border-gray-200 bg-white flex flex-col h-screen">
        {/* Fixed Header */}
        <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-4 flex-shrink-0">
          <Image
            src="/assets/Resumizeme.png"
            alt="Logo"
            width={130}
            height={24}
            className="text-blue-500"
          />
        </div>

        {/* Scrollable Content */}
        <div className="p-4 flex-1 overflow-y-auto scrollbar-hide">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium">My templates</span>
          </div>

          <div className="mt-4 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <div className="mt-4 space-y-1">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">My boards</span>
              <button className="text-gray-400 hover:text-gray-600">+</button>
            </div>
            <div className="mt-2 space-y-1">
              {boards.map((board, index) => (
                <button
                  key={index}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                >
                  {index < 3 ? (
                    <Image
                      src={"/assets/Web Button 4.png"}
                      width={12}
                      height={12}
                      alt="Icon for less than 3"
                    />
                  ) : (
                    <Image
                      src={"/assets/Frame 79.png"}
                      width={12}
                      height={12}
                      alt="Icon for 3 or greater"
                    />
                  )}
                  {board}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex w-full items-center justify-between border-t border-gray-200 bg-white p-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200">
              <Image
                src="/assets/carls-img.png"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <span className="text-sm font-medium">Carla</span>
          </div>
          <button>
            <Settings className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto h-screen">
        <div className="mx-auto max-w-4xl px-6 py-6">
          {/* Premium Account Banner */}
          <div className="mb-8 rounded-lg bg-emerald-600 p-6 text-white">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="rounded-full bg-white/20 p-1">
                <Image
                  src="/assets/Frame25046.png"
                  width={150}
                  height={150}
                  alt="briefcase"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Premium Account</h1>
                <p className="mt-1 text-emerald-50">
                  You have a premium account, granting you access to all the
                  remarkable features offered by ResumeDone. With this
                  privilege, you can indulge in the freedom of downloading an
                  unlimited number of resumes and cover letters in both PDF and
                  Word formats.
                </p>
              </div>
            </div>
          </div>

          {/* Personal Information Form */}
          <div className="relative rounded-lg bg-white px-2 py-4">
            <div className="flex gap-8">
              {/* Form Section  */}
              <div className="w-[85%]">
                <h2 className="mb-8 text-2xl font-semibold text-gray-900">
                  Personal Information
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                  <FloatingInput label="First Name" defaultValue="Petter" />
                  <FloatingInput label="Last Name" defaultValue="Cetera" />
                  <FloatingInput label="City" defaultValue="London" />
                  <FloatingInput label="Postal Code" defaultValue="E2 4XF" />
                  <div className="md:col-span-2">
                    <FloatingInput label="Address" defaultValue="123 Example" />
                  </div>
                  <FloatingInput
                    label="Email"
                    type="email"
                    defaultValue="petter@gmail.com"
                    icon={<Check className="h-5 w-5 text-emerald-500" />}
                  />
                  <FloatingInput
                    label="Phone"
                    type="tel"
                    defaultValue="+442223334444"
                  />
                  <div className="md:col-span-2">
                    <FloatingInput
                      label="Password"
                      type="password"
                      defaultValue="password"
                    />
                  </div>
                </div>

                <p className="mt-6 text-sm text-gray-600">
                  Use this email to log in to your{" "}
                  <Link href="#" className="text-blue-500 hover:underline">
                    resumedone.io
                  </Link>{" "}
                  account and receive notifications.
                </p>

                <button className="mt-6 rounded-md bg-blue-500 px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-600">
                  Save
                </button>

                <div className="mt-6">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                    />
                    Show my profile to serious employers on                   <Link href="#" className="text-blue-500 hover:underline">
                    hirethebest.io </Link> for free
                  </label>
                </div>
              </div>

              {/* Profile Picture Section */}
              <div className="w-[15%] mt-12">
                <div className="relative">
                  <Image
                    src="/assets/Ellipse 12.png"
                    alt="Profile"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                  <button
                    className="absolute bottom-1 right-1 rounded-full bg-white p-2 shadow-md hover:bg-gray-50"
                    aria-label="Edit profile picture"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8333 5.83333C16.2754 5.83333 16.6993 5.65774 17.0118 5.34518C17.3244 5.03262 17.5 4.60869 17.5 4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.6756 16.2754 2.5 15.8333 2.5C15.3913 2.5 14.9674 2.6756 14.6548 2.98816C14.3423 3.30072 14.1667 3.72464 14.1667 4.16667C14.1667 4.60869 14.3423 5.03262 14.6548 5.34518C14.9674 5.65774 15.3913 5.83333 15.8333 5.83333Z"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 9.16667V15.8333C17.5 16.4964 17.2366 17.1323 16.7678 17.6011C16.299 18.0699 15.663 18.3333 15 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V5C1.66667 4.33696 1.93006 3.70107 2.3989 3.23223C2.86774 2.76339 3.50363 2.5 4.16667 2.5H10.8333"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.66667 13.3333L5.83333 9.16667C6.94167 8.05833 8.225 8.05833 9.33333 9.16667L13.3333 13.1667"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6667 11.5L12.5 10.6667C13.0917 10.075 13.7417 10.1583 14.4167 10.8333L17.5 13.9167"
                        stroke="#6B7280"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Delete Account Section */}
            <div className="mt-12 border-t pt-8">
              <h3 className="text-lg font-medium">Delete account</h3>
              <p className="mt-2 text-sm text-gray-600">
                If you delete your account you&apos;ll be permanently removing
                it from our systems - you can&apos;t undo it.
              </p>
              <button className="mt-4 text-sm font-medium text-red-500 hover:text-red-600">
                Yes, Delete my account
              </button>
            </div>

            {/* Support Section */}
            <div className="mt-12 text-sm text-gray-600">
              <Link href="#" className="text-blue-500 hover:underline">
                Get in touch with our support team
              </Link>{" "}
              if you have any question or want to leave some feedback.
              We&apos;ll be happy to hear from you.
            </div>

            {/* Footer Links */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-700">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-700">
                FAQ
              </Link>
              <Link href="#" className="hover:text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
