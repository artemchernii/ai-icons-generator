import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Button from "~/components/Button";
import FormGroup from "~/components/FormGroup";
import Input from "~/components/Input";
import Label from "~/components/Label";
import { api } from "~/utils/api";

const Generate: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
  });



  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess: (data) => {
      console.log("here is data: ", data);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateIcon.mutate({ prompt: form.prompt });
  };

  const handleFormChange =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [key]: e.target.value,
      });
    };

  return (
    <>
      <Head>
        <title>Generate</title>
        <meta name="description" content="Generate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main  */}
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form
          className="flex flex-col gap-2 rounded-xl bg-gray-300/30 p-10 shadow-md backdrop-blur-sm dark:bg-white/30"
          onSubmit={handleSubmit}
        >
          <FormGroup className="flex flex-col gap-2">
            <Label htmlFor="prompt">Prompt:</Label>
            <Input
              name="prompt"
              placeholder="Your prompt"
              value={form.prompt}
              onChange={handleFormChange("prompt")}
            />
            <Button type="submit" disabled={!form.prompt} variant="primary">
              Submit
            </Button>
          </FormGroup>
        </form>
      </main>
    </>
  );
};

export default Generate;
