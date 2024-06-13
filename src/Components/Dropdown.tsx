import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="focus:outline-none cursor-pointer flex flex-col gap-1 bg-white">
        <div className="h-0.5 w-5 bg-black" />
        <div className="h-0.5 w-5 bg-black" />
        <div className="self-end h-0.5 w-2.5 bg-black" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white rounded-md shadow-lg p-2 md:mr-24 mt-2">
        <DropdownMenu.Item className="cursor-pointer px-4 py-2 text-sm text-lime-400 hover:bg-lime-50 rounded-md focus:outline-none">
          <a href="https://wa.me/5511982955188">Whatsapp</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer px-4 py-2 text-sm text-blue-500 hover:bg-blue-50 rounded-md focus:outline-none">
          <a href="mailto:LucasSantos3005@proton.me">E-mail</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer px-4 py-2 text-sm text-yellow-400 hover:bg-yellow-50 rounded-md focus:outline-none">
          <a href="/Lucas-Santos/CV_Lucas-Silva.pdf">Curriculum</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="cursor-pointer px-4 py-2 text-sm text-sky-400 hover:bg-blue-50  rounded-md focus:outline-none">
          <a href="https://linkedin.com/in/Lucas-S-Silva0001">LinkedIn</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
