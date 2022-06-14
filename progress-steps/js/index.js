const steps = document.querySelectorAll(".progress-steps__step");
const prevButton = document.querySelector(".progress-steps__prev");
const nextButton = document.querySelector(".progress-steps__next");

const stepFunc = manageSteps(steps);

nextButton.addEventListener("click", () => stepFunc(true));
prevButton.addEventListener("click", () => stepFunc(false));

function manageSteps(steps) {
  let i = 0;
  function makeStep(goAhead) {
    const currentStep = steps[i];
    nextButton.disabled = false;
    prevButton.disabled = false;

    const nextStep = goAhead ? steps[i + 1] : steps[i - 1];
    currentStep.classList.remove("active");
    nextStep.classList.add("active");
    if (goAhead) {
      currentStep.classList.add("done");
      i++;
    } else {
      nextStep.classList.remove("done");
      i--;
    }
    if (i + 1 === steps.length) {
      nextButton.disabled = true;
    } else if (i === 0) {
      prevButton.disabled = true;
    }
  }
  return makeStep;
}
