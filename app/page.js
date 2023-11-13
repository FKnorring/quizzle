import Questions from "@/components/Questions";
import { Fragment } from "react";

async function getQuestions() {
  const res = await fetch("https://opentdb.com/api.php?amount=3&type=multiple");
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const questions = await getQuestions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">Quizzle</h1>
      <div>
        <Questions questions={questions} />
      </div>
    </main>
  );
}
