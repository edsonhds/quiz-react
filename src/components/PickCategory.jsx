import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Cat from "../img/cat.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das opções abaixo:</p>
      {quizState.questions.map((question) => (
        <button className="button"
          onClick={() => chooseCategoryAndReorderQuestions(question.category)}
          key={question.category}
        >
          {question.category}
        </button>
      ))}

      <img src={Cat} alt="Categoria do Quiz" />
    </div>
  );
};

export default PickCategory;
