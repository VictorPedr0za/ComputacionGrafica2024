let currentPlantIndex = 1; // Contador para el modelo actual (1 a 6)

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drop(ev) {
            ev.preventDefault();
            const data = ev.dataTransfer.getData("text");
            const droppedElement = document.getElementById(data);

            // Cambiar el modelo GLB
            const modelViewer = document.querySelector('model-viewer');
            if (droppedElement && droppedElement.id === 'regadera') {
                currentPlantIndex++; // Aumentar el índice del modelo
                if (currentPlantIndex > 6) {
                    currentPlantIndex = 1; // Reiniciar el índice si es mayor que 6
                }
                modelViewer.src = `./modelos/Plantas/Planta ${currentPlantIndex}.glb`; // Cambiar al nuevo modelo
            }
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        } 

        const modelViewer2 = document.querySelector("#hotspot-camera-view-demo");
        const descriptionBox = document.getElementById("descriptionBox");
        
        const annotationClicked = (annotation) => {
            let dataset = annotation.dataset;
            modelViewer2.cameraTarget = dataset.target;
            modelViewer2.cameraOrbit = dataset.orbit;
            modelViewer2.fieldOfView = '45deg';
        
            const description = dataset.description;
            annotation.textContent = description; 
            descriptionBox.style.display = 'none'; 
        }
        
        modelViewer2.querySelectorAll('button').forEach((hotspot) => {
            hotspot.addEventListener('click', (event) => {
                event.stopPropagation(); 
                annotationClicked(hotspot);
            });
        });
        
        document.addEventListener('click', () => {
            modelViewer2.querySelectorAll('button').forEach((hotspot) => {
                const originalText = hotspot.getAttribute('data-original-text');
                if (originalText) {
                    hotspot.textContent = originalText; 
                }
            });
        });
        
        modelViewer2.querySelectorAll('button').forEach((hotspot) => {
            hotspot.setAttribute('data-original-text', hotspot.textContent);
        });

        document.addEventListener("DOMContentLoaded", function() {
          const quizButton = document.getElementById("quizButton");
          const quizSection = document.getElementById("quiz-section");
          const courseSection = document.querySelector(".course");
          const quizContainer = document.getElementById("quiz-container");
          const submitQuizButton = document.getElementById("submitQuizButton");
      
          quizButton.addEventListener("click", function() {
              courseSection.style.display = "none";
              quizSection.style.display = "block";
              quizButton.style.display = "none";
              startQuiz();
          });
      
          submitQuizButton.addEventListener("click", function() {
              gradeQuiz();
          });
      
          function startQuiz() {
              const questions = [
                  {
                      question: "¿Qué orgánulo se encarga de modificar, clasificar y empaquetar proteínas?",
                      options: ["Mitocondria", "Núcleo", "Aparato de Golgi", "Centriolo"],
                      answer: "Aparato de Golgi"
                  },
                  {
                      question: "¿Cuál es el orgánulo responsable de la producción de ATP?",
                      options: ["Retículo Endoplasmático", "Mitocondria", "Núcleo", "Aparato de Golgi"],
                      answer: "Mitocondria"
                  },
                  {
                      question: "¿Qué contiene el material genético de la célula y controla sus actividades?",
                      options: ["Mitocondria", "Núcleo", "Centriolo", "Retículo Endoplasmático"],
                      answer: "Núcleo"
                  },
                  {
                      question: "¿Cuál es el orgánulo responsable de la síntesis de proteínas y lípidos?",
                      options: ["Aparato de Golgi", "Mitocondria", "Núcleo", "Retículo Endoplasmático"],
                      answer: "Retículo Endoplasmático"
                  },
                  {
                      question: "¿Qué orgánulo juega un papel crucial en la división celular?",
                      options: ["Mitocondria", "Centriolo", "Núcleo", "Retículo Endoplasmático"],
                      answer: "Centriolo"
                  }
              ];
      
              quizContainer.innerHTML = "";
              questions.forEach((q, index) => {
                  const questionElement = document.createElement("div");
                  questionElement.className = "quiz-question";
                  questionElement.innerHTML = `
                      <p>${q.question}</p>
                      ${q.options.map((option, i) => `
                          <label>
                              <input type="radio" name="question${index}" value="${option}">
                              ${option}
                          </label><br>
                      `).join("")}
                  `;
                  quizContainer.appendChild(questionElement);
              });
          }
      
          function gradeQuiz() {
              const questions = [
                  "Aparato de Golgi",
                  "Mitocondria",
                  "Núcleo",
                  "Retículo Endoplasmático",
                  "Centriolo"
              ];
              let score = 0;
              questions.forEach((answer, index) => {
                  const selected = document.querySelector(`input[name="question${index}"]:checked`);
                  if (selected && selected.value === answer) {
                      score++;
                  }
              });
              const successSound = document.getElementById("success-sound");
        const failureSound = document.getElementById("failure-sound");

        if (score > questions.length / 2) {
            successSound.play();
            alert(`¡Felicidades! Tu puntuación es ${score} de ${questions.length}`);
        } else {
            failureSound.play();
            alert(`Lo siento, tu puntuación es ${score} de ${questions.length}`);
        }

          }
      });
      

      document.addEventListener("DOMContentLoaded", function() {
        const quizButton = document.getElementById("quizButton1");
        const quizSection = document.getElementById("quiz-section");
        const courseSection = document.querySelector(".course");
        const quizContainer = document.getElementById("quiz-container");
        const submitQuizButton = document.getElementById("submitQuizButton1");
    
        quizButton.addEventListener("click", function() {
            courseSection.style.display = "none";
            quizSection.style.display = "block";
            quizButton.style.display = "none";
            startQuiz();
        });
    
        submitQuizButton.addEventListener("click", function() {
            gradeQuiz();
        });
    
        function startQuiz() {
          const questions = [
              {
                  question: "¿Qué hueso protege el cerebro?",
                  options: ["Cráneo", "Fémur", "Espina dorsal", "Pelvis"],
                  answer: "Cráneo"
              },
              {
                  question: "¿Cuál es el hueso más largo del cuerpo humano?",
                  options: ["Costillas", "Fémur", "Cráneo", "Rodilla"],
                  answer: "Fémur"
              },
              {
                  question: "¿Qué estructura ósea conecta el fémur con la tibia?",
                  options: ["Cráneo", "Rodilla", "Pelvis", "Espina dorsal"],
                  answer: "Rodilla"
              },
              {
                  question: "¿Qué parte del esqueleto está formada por vértebras y soporta el cuerpo?",
                  options: ["Fémur", "Espina dorsal", "Costillas", "Pelvis"],
                  answer: "Espina dorsal"
              },
              {
                  question: "¿Qué huesos forman la caja torácica y protegen órganos vitales como el corazón y los pulmones?",
                  options: ["Costillas", "Fémur", "Pelvis", "Rodilla"],
                  answer: "Costillas"
              },
              {
                  question: "¿Qué hueso sostiene el peso del cuerpo y conecta las extremidades inferiores con el torso?",
                  options: ["Pelvis", "Rodilla", "Espina dorsal", "Costillas"],
                  answer: "Pelvis"
              }
          ];
    
            quizContainer.innerHTML = "";
            questions.forEach((q, index) => {
                const questionElement = document.createElement("div");
                questionElement.className = "quiz-question";
                questionElement.innerHTML = `
                    <p>${q.question}</p>
                    ${q.options.map((option, i) => `
                        <label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${option}
                        </label><br>
                    `).join("")}
                `;
                quizContainer.appendChild(questionElement);
            });
        }
    
        function gradeQuiz() {
            const questions = [
                "Cráneo",
                "Fémur",
                "Rodilla",
                "Espina dorsal",
                "Costillas",
                "Pelvis"
            ];
            let score = 0;
            questions.forEach((answer, index) => {
                const selected = document.querySelector(`input[name="question${index}"]:checked`);
                if (selected && selected.value === answer) {
                    score++;
                }
            });
            const successSound = document.getElementById("success-sound");
            const failureSound = document.getElementById("failure-sound");
    
            if (score > questions.length / 2) {
                successSound.play();
                alert(`¡Felicidades! Tu puntuación es ${score} de ${questions.length}`);
            } else {
                failureSound.play();
                alert(`Lo siento, tu puntuación es ${score} de ${questions.length}`);
            }
        }
    });
    





// Resize by Screen Size
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
