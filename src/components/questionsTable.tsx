import React from "react";
import { Question } from "../services/questionService";

// tsx (typescript) functional component
export interface QuestionsTableProps {
  questions: Question[];
}

const QuestionsTable: React.FC<QuestionsTableProps> = (
  props: QuestionsTableProps
) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {props.questions.map((question) => (
            <tr key={question.Id}>
              <th scope="row">{question.Id}</th>
              <td>{question.Title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
