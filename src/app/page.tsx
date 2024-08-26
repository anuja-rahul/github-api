import { Button } from "@nextui-org/react";
export default function Home() {
  return (
    <div>
      <h1 className="text-large text-primary">GitHub API</h1>
      <Button
        size="lg"
        radius="full"
        color="primary"
        variant="shadow"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Click me
      </Button>
    </div>
  );
}
