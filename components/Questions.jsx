"use client"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form } from "@/components/ui/form";
import { Button } from "./ui/button";

export default function Questions({ questions }) {
  function parse(str) {
    if (!str) return;

    const map = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#039;": "'",
    };

    return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => map[m]);
  }

  const checkAnswers = console.log

  return (
    <Form onSubmit={checkAnswers}>
        {questions.map(
          ({ question, incorrect_answers, correct_answer }, index) => {
            const answers = [...incorrect_answers, correct_answer];
            return (
              <>
                <div key={index} className="mb-4">
                  <h2 className="text-l font-bold m-0">{parse(question)}</h2>
                  <hr className="my-2" />
                  <RadioGroup >
                    {answers.map((answer, index) => {
                      return (
                        
                          <div key={index} className="flex items-center space-x-2">
                            <RadioGroupItem
                              type="radio"
                              id={answer}
                              value={answer}
                              className="mr-2"
                            />
                            <Label htmlFor={answer}>{parse(answer)}</Label>
                          </div>
                       
                      );
                    })}
                   </RadioGroup>
                </div>
              </>
            );
          }
        )}
        <Button type="submit">
          Submit
        </Button>
      </Form>
  )
}