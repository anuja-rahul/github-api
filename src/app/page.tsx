import { Divider } from "@nextui-org/react";
import InputForm from "./components/InputForm";
export default function Home() {
  return (
    <section className="flex flex-col mt-8 w-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-balance text-primary">
        GitHub Finder
      </h1>
      <Divider className="my-4 w-1/12" />

      <InputForm />
    </section>
  );
}
