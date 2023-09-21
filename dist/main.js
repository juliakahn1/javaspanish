/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/poem-view */ \"./src/scripts/poem-view.js\");\n/* harmony import */ var _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/parts-of-speech-view */ \"./src/scripts/parts-of-speech-view.js\");\n/* harmony import */ var _scripts_dropdown_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/dropdown-view */ \"./src/scripts/dropdown-view.js\");\n\n\n\nwindow.poemMetaData = document.querySelector(\".poem-metadata\");\nwindow.poemEl = document.querySelector(\".poem\");\nfunction setupPoem(name) {\n  window.poem = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, name, poemMetaData, poem => {\n    window.pos = new _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](document.querySelector(\".pos\"), poem.getPoSPresent());\n  });\n}\nconst defaultPoemName = \"Caminante, no hay camino\";\nsetupPoem(defaultPoemName);\nconst dropdownEl = document.querySelector(\".dropdown-content\");\nwindow.dropdown = new _scripts_dropdown_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](dropdownEl);\n\n// dropdown poem selector event listener\n\ndropdownEl.addEventListener(\"click\", e => {\n  e.preventDefault();\n  window.poemMetaData.replaceChildren([]);\n  window.poemEl.replaceChildren([]);\n  window.pos.clearAll();\n  setupPoem(e.target.innerHTML);\n});\n\n// modal event listeners\n\ndocument.addEventListener(\"DOMContentLoaded\", e => {\n  document.querySelector(\".modal\").style.display = \"flex\";\n});\ndocument.querySelector('.close-btn').addEventListener(\"click\", e => {\n  document.querySelector('.modal').style.display = \"none\";\n});\ndocument.querySelector('.modal').addEventListener(\"click\", e => {\n  document.querySelector('.modal').style.display = \"none\";\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNvQjtBQUNaO0FBRWxERyxNQUFNLENBQUNDLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7QUFDOURILE1BQU0sQ0FBQ0ksTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFFL0MsU0FBU0UsU0FBU0EsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3JCTixNQUFNLENBQUNPLElBQUksR0FBRyxJQUFJViwwREFBUSxDQUFDTyxNQUFNLEVBQUVFLElBQUksRUFBRUwsWUFBWSxFQUFHTSxJQUFJLElBQUs7SUFDN0RQLE1BQU0sQ0FBQ1EsR0FBRyxHQUFHLElBQUlWLHFFQUFpQixDQUFDSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRUksSUFBSSxDQUFDRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0VBQzVGLENBQUMsQ0FBQztBQUNOO0FBRUEsTUFBTUMsZUFBZSxHQUFHLDBCQUEwQjtBQUNsREwsU0FBUyxDQUFDSyxlQUFlLENBQUM7QUFFMUIsTUFBTUMsVUFBVSxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUM5REgsTUFBTSxDQUFDWSxRQUFRLEdBQUcsSUFBSWIsOERBQVksQ0FBQ1ksVUFBVSxDQUFDOztBQUU5Qzs7QUFFQUEsVUFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztFQUN4Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUVsQmYsTUFBTSxDQUFDQyxZQUFZLENBQUNlLGVBQWUsQ0FBQyxFQUFFLENBQUM7RUFDdkNoQixNQUFNLENBQUNJLE1BQU0sQ0FBQ1ksZUFBZSxDQUFDLEVBQUUsQ0FBQztFQUNqQ2hCLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDUyxRQUFRLENBQUMsQ0FBQztFQUVyQlosU0FBUyxDQUFDUyxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO0FBQ2pDLENBQUMsQ0FBQzs7QUFFRjs7QUFFQWpCLFFBQVEsQ0FBQ1csZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUdDLENBQUMsSUFBSztFQUNqRFosUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNpQixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0FBQzNELENBQUMsQ0FBQztBQUVGbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO0VBQ2xFWixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ2lCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07QUFDM0QsQ0FBQyxDQUFDO0FBRUZuQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxDQUFDLElBQUs7RUFDOURaLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDaUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUMzRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb2VtVmlldyBmcm9tIFwiLi9zY3JpcHRzL3BvZW0tdmlld1wiXG5pbXBvcnQgUGFydHNPZlNwZWVjaFZpZXcgZnJvbSBcIi4vc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlld1wiXG5pbXBvcnQgRHJvcGRvd25WaWV3IGZyb20gXCIuL3NjcmlwdHMvZHJvcGRvd24tdmlld1wiXG5cbndpbmRvdy5wb2VtTWV0YURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvZW0tbWV0YWRhdGFcIilcbndpbmRvdy5wb2VtRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvZW1cIik7XG5cbmZ1bmN0aW9uIHNldHVwUG9lbShuYW1lKSB7XG4gICAgd2luZG93LnBvZW0gPSBuZXcgUG9lbVZpZXcocG9lbUVsLCBuYW1lLCBwb2VtTWV0YURhdGEsIChwb2VtKSA9PiB7XG4gICAgICAgIHdpbmRvdy5wb3MgPSBuZXcgUGFydHNPZlNwZWVjaFZpZXcoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3NcIiksIHBvZW0uZ2V0UG9TUHJlc2VudCgpKVxuICAgIH0pXG59XG5cbmNvbnN0IGRlZmF1bHRQb2VtTmFtZSA9IFwiQ2FtaW5hbnRlLCBubyBoYXkgY2FtaW5vXCJcbnNldHVwUG9lbShkZWZhdWx0UG9lbU5hbWUpXG5cbmNvbnN0IGRyb3Bkb3duRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLWNvbnRlbnRcIilcbndpbmRvdy5kcm9wZG93biA9IG5ldyBEcm9wZG93blZpZXcoZHJvcGRvd25FbClcblxuLy8gZHJvcGRvd24gcG9lbSBzZWxlY3RvciBldmVudCBsaXN0ZW5lclxuXG5kcm9wZG93bkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgd2luZG93LnBvZW1NZXRhRGF0YS5yZXBsYWNlQ2hpbGRyZW4oW10pO1xuICAgIHdpbmRvdy5wb2VtRWwucmVwbGFjZUNoaWxkcmVuKFtdKVxuICAgIHdpbmRvdy5wb3MuY2xlYXJBbGwoKVxuXG4gICAgc2V0dXBQb2VtKGUudGFyZ2V0LmlubmVySFRNTClcbn0pXG5cbi8vIG1vZGFsIGV2ZW50IGxpc3RlbmVyc1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiXG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxufSlcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59KVxuIl0sIm5hbWVzIjpbIlBvZW1WaWV3IiwiUGFydHNPZlNwZWVjaFZpZXciLCJEcm9wZG93blZpZXciLCJ3aW5kb3ciLCJwb2VtTWV0YURhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb2VtRWwiLCJzZXR1cFBvZW0iLCJuYW1lIiwicG9lbSIsInBvcyIsImdldFBvU1ByZXNlbnQiLCJkZWZhdWx0UG9lbU5hbWUiLCJkcm9wZG93bkVsIiwiZHJvcGRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVwbGFjZUNoaWxkcmVuIiwiY2xlYXJBbGwiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/dropdown-view.js":
/*!**************************************!*\
  !*** ./src/scripts/dropdown-view.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass DropdownView {\n  constructor(dropdownEl) {\n    this.dropdownEl = dropdownEl;\n    this.titles = this.fetchTitles();\n  }\n  fetchTitles() {\n    const res = fetch(\"./data/data.json\").then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.titles = Object.keys(retrieval);\n      this.loadDropdown();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  loadDropdown() {\n    this.titles.forEach(title => {\n      const p = document.createElement(\"p\");\n      p.innerText = title;\n      this.dropdownEl.append(p);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kcm9wZG93bi12aWV3LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFDZkMsV0FBV0EsQ0FBQ0MsVUFBVSxFQUFFO0lBQ3BCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQSxVQUFVO0lBQzVCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFDcEM7RUFFQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsTUFBTUMsR0FBRyxHQUFHQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDaENDLElBQUksQ0FBQ0YsR0FBRyxJQUFJO01BQ1QsSUFBSUEsR0FBRyxDQUFDRyxFQUFFLEVBQUU7UUFDUixPQUFPSCxHQUFHLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNILE1BQU1KLEdBQUc7TUFDYjtJQUNKLENBQUMsQ0FBQyxDQUNERSxJQUFJLENBQUNHLFNBQVMsSUFBSTtNQUNmLElBQUksQ0FBQ1AsTUFBTSxHQUFHUSxNQUFNLENBQUNDLElBQUksQ0FBQ0YsU0FBUyxDQUFDO01BQ3BDLElBQUksQ0FBQ0csWUFBWSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQ0MsYUFBYSxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsYUFBYSxDQUFDLENBQUM7RUFDM0Q7RUFFQUYsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsSUFBSSxDQUFDVixNQUFNLENBQUNlLE9BQU8sQ0FBQ0MsS0FBSyxJQUFJO01BQ3pCLE1BQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO01BQ3JDRixDQUFDLENBQUNHLFNBQVMsR0FBR0osS0FBSztNQUNuQixJQUFJLENBQUNqQixVQUFVLENBQUNzQixNQUFNLENBQUNKLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsK0RBQWVwQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9kcm9wZG93bi12aWV3LmpzPzFmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRHJvcGRvd25WaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bkVsKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbCA9IGRyb3Bkb3duRWxcbiAgICAgICAgdGhpcy50aXRsZXMgPSB0aGlzLmZldGNoVGl0bGVzKClcbiAgICB9XG5cbiAgICBmZXRjaFRpdGxlcygpIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goXCIuL2RhdGEvZGF0YS5qc29uXCIpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmV0cmlldmFsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlcyA9IE9iamVjdC5rZXlzKHJldHJpZXZhbClcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREcm9wZG93bigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yUmVzcG9uc2UgPT4gY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSkpXG4gICAgfVxuXG4gICAgbG9hZERyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLnRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICAgICAgcC5pbm5lclRleHQgPSB0aXRsZVxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkVsLmFwcGVuZChwKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25WaWV3O1xuIl0sIm5hbWVzIjpbIkRyb3Bkb3duVmlldyIsImNvbnN0cnVjdG9yIiwiZHJvcGRvd25FbCIsInRpdGxlcyIsImZldGNoVGl0bGVzIiwicmVzIiwiZmV0Y2giLCJ0aGVuIiwib2siLCJqc29uIiwicmV0cmlldmFsIiwiT2JqZWN0Iiwia2V5cyIsImxvYWREcm9wZG93biIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwidGl0bGUiLCJwIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/dropdown-view.js\n");

/***/ }),

/***/ "./src/scripts/parts-of-speech-view.js":
/*!*********************************************!*\
  !*** ./src/scripts/parts-of-speech-view.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PartsOfSpeechView {\n  constructor(posEl, posPresent) {\n    this.posEl = posEl;\n    this.nonSubVerbs = [\"verb\", \"noun\", \"adjective\", \"adverb\", \"article\", \"pronoun\", \"preposition\", \"conjunction\"];\n    this.posPresent = posPresent;\n    this.state = {};\n    this.posPresent.forEach(pos => {\n      if (pos !== undefined) {\n        this.state[pos] = false;\n      }\n    });\n    this.populateWordTiles();\n  }\n  populateWordTiles() {\n    this.posEl.replaceChildren([]);\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"pos-list\");\n    this.posPresent.forEach(partOfSpeech => {\n      const newTile = this.createWordTile(partOfSpeech);\n      if (newTile.classList.contains(\"verb\")) {\n        newTile.innerText = \"all verbs\";\n      }\n      ul.append(newTile);\n    });\n    this.createClearTile(ul);\n    this.posEl.append(ul);\n    this.posEl.addEventListener(\"click\", this.onTileClick.bind(this));\n  }\n  createWordTile(partOfSpeech) {\n    const li = document.createElement(\"li\");\n    li.innerText = partOfSpeech;\n    li.classList.add(\"pos-tile\", `${partOfSpeech}`);\n    if (!this.nonSubVerbs.includes(partOfSpeech)) {\n      li.classList.add(\"subverb\");\n    }\n    li.setAttribute(\"pos\", `${partOfSpeech}`);\n    return li;\n  }\n  createClearTile(ul) {\n    const li = document.createElement(\"li\");\n    li.classList.add(\"pos-tile\");\n    li.setAttribute(\"id\", \"clear-tile\");\n    li.setAttribute(\"pos\", \"clear-tile\");\n    li.innerText = \"Clear\";\n    ul.append(li);\n  }\n  onTileClick(e) {\n    // button click\n    e.preventDefault();\n    const clickedTile = e.target.getAttribute(\"pos\");\n    this.clearAll();\n    this.updateState(clickedTile);\n    this.applyState();\n  }\n  clearAll() {\n    this.clearTiles();\n    this.clearWords();\n  }\n  clearTiles() {\n    document.querySelectorAll(\".pos-tile\").forEach(ele => ele.classList.remove(\"selected\"));\n  }\n  clearWords() {\n    document.querySelectorAll(\".word\").forEach(ele => ele.classList.remove(\"selected\"));\n  }\n  updateState(clickedTile) {\n    // if clickedTile is clear-tile, set all whole hash map to false\n    if (clickedTile === \"clear-tile\") {\n      Object.keys(this.state).forEach(key => this.state[key] = false);\n    } else {\n      this.state[clickedTile] = !this.state[clickedTile]; // toggle between values\n    }\n\n    // verbs :(\n  }\n\n  applyState() {\n    Object.keys(this.state).forEach(pos => {\n      if (this.state[pos]) {\n        // highlight tiles\n        document.querySelectorAll(`[pos=${pos}]`).forEach(ele => ele.classList.add(\"selected\"));\n        // highlight words\n        document.querySelectorAll(`.word.${pos}`).forEach(ele => ele.classList.add(\"selected\"));\n        // enable clear button\n        document.querySelector(\"#clear-tile\").classList.remove(\"disabled\");\n      }\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartsOfSpeechView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQzBCLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDMUIsS0FBSyxDQUFDMEIsV0FBVyxDQUFDLEVBQUM7SUFDdkQ7O0lBRUE7RUFDSjs7RUFFQUssVUFBVUEsQ0FBQSxFQUFHO0lBQ1RNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3RDLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsSUFBSTtNQUNuQyxJQUFJLElBQUksQ0FBQ0YsS0FBSyxDQUFDRSxHQUFHLENBQUMsRUFBRTtRQUNqQjtRQUNBSyxRQUFRLENBQUMyQixnQkFBZ0IsQ0FBRSxRQUFPaEMsR0FBSSxHQUFFLENBQUMsQ0FBQ0QsT0FBTyxDQUFDa0MsR0FBRyxJQUFJQSxHQUFHLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RjtRQUNBSCxRQUFRLENBQUMyQixnQkFBZ0IsQ0FBRSxTQUFRaEMsR0FBSSxFQUFDLENBQUMsQ0FBQ0QsT0FBTyxDQUFDa0MsR0FBRyxJQUFJQSxHQUFHLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RjtRQUNBSCxRQUFRLENBQUNpQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMvQixTQUFTLENBQUMyQixNQUFNLENBQUMsVUFBVSxDQUFDO01BQ3RFO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSjtBQUVBLCtEQUFlekMsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlldy5qcz85NzM1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBhcnRzT2ZTcGVlY2hWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc0VsLCBwb3NQcmVzZW50KSB7XG4gICAgICAgIHRoaXMucG9zRWwgPSBwb3NFbFxuICAgICAgICB0aGlzLm5vblN1YlZlcmJzID0gW1widmVyYlwiLCBcIm5vdW5cIiwgXCJhZGplY3RpdmVcIiwgXCJhZHZlcmJcIiwgXCJhcnRpY2xlXCIsIFwicHJvbm91blwiLCBcInByZXBvc2l0aW9uXCIsIFwiY29uanVuY3Rpb25cIl1cbiAgICAgICAgdGhpcy5wb3NQcmVzZW50ID0gcG9zUHJlc2VudFxuICAgICAgICB0aGlzLnN0YXRlID0ge31cblxuICAgICAgICB0aGlzLnBvc1ByZXNlbnQuZm9yRWFjaChwb3MgPT4ge1xuICAgICAgICAgICAgaWYgKHBvcyAhPT0gdW5kZWZpbmVkKSB7dGhpcy5zdGF0ZVtwb3NdID0gZmFsc2V9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucG9wdWxhdGVXb3JkVGlsZXMoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlV29yZFRpbGVzKCkge1xuICAgICAgICB0aGlzLnBvc0VsLnJlcGxhY2VDaGlsZHJlbihbXSlcblxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKFwicG9zLWxpc3RcIilcblxuICAgICAgICB0aGlzLnBvc1ByZXNlbnQuZm9yRWFjaChwYXJ0T2ZTcGVlY2ggPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3VGlsZSA9IHRoaXMuY3JlYXRlV29yZFRpbGUocGFydE9mU3BlZWNoKVxuICAgICAgICAgICAgaWYgKG5ld1RpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVyYlwiKSkgeyBuZXdUaWxlLmlubmVyVGV4dCA9IFwiYWxsIHZlcmJzXCIgfVxuICAgICAgICAgICAgdWwuYXBwZW5kKG5ld1RpbGUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5jcmVhdGVDbGVhclRpbGUodWwpXG4gICAgICAgIHRoaXMucG9zRWwuYXBwZW5kKHVsKVxuICAgICAgICB0aGlzLnBvc0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uVGlsZUNsaWNrLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgY3JlYXRlV29yZFRpbGUocGFydE9mU3BlZWNoKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IHBhcnRPZlNwZWVjaFxuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwicG9zLXRpbGVcIiwgYCR7cGFydE9mU3BlZWNofWApXG4gICAgICAgIGlmICghdGhpcy5ub25TdWJWZXJicy5pbmNsdWRlcyhwYXJ0T2ZTcGVlY2gpKSB7IGxpLmNsYXNzTGlzdC5hZGQoXCJzdWJ2ZXJiXCIpIH1cbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwicG9zXCIsIGAke3BhcnRPZlNwZWVjaH1gKVxuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cbiAgICBjcmVhdGVDbGVhclRpbGUodWwpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcInBvcy10aWxlXCIpXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2xlYXItdGlsZVwiKVxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJwb3NcIiwgXCJjbGVhci10aWxlXCIpXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IFwiQ2xlYXJcIlxuICAgICAgICB1bC5hcHBlbmQobGkpXG4gICAgfVxuXG4gICAgb25UaWxlQ2xpY2soZSkgeyAvLyBidXR0b24gY2xpY2tcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IGNsaWNrZWRUaWxlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zXCIpXG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKVxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGNsaWNrZWRUaWxlKVxuICAgICAgICB0aGlzLmFwcGx5U3RhdGUoKVxuICAgIH1cblxuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICB0aGlzLmNsZWFyVGlsZXMoKVxuICAgICAgICB0aGlzLmNsZWFyV29yZHMoKVxuICAgIH1cblxuICAgIGNsZWFyVGlsZXMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9zLXRpbGVcIikuZm9yRWFjaChlbGUgPT4gZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSlcbiAgICB9XG5cbiAgICBjbGVhcldvcmRzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndvcmRcIikuZm9yRWFjaChlbGUgPT4gZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSlcbiAgICB9XG5cbiAgICB1cGRhdGVTdGF0ZShjbGlja2VkVGlsZSkge1xuICAgICAgICAvLyBpZiBjbGlja2VkVGlsZSBpcyBjbGVhci10aWxlLCBzZXQgYWxsIHdob2xlIGhhc2ggbWFwIHRvIGZhbHNlXG4gICAgICAgIGlmIChjbGlja2VkVGlsZSA9PT0gXCJjbGVhci10aWxlXCIpIHsgXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5mb3JFYWNoKGtleSA9PiB0aGlzLnN0YXRlW2tleV0gPSBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVbY2xpY2tlZFRpbGVdID0gIXRoaXMuc3RhdGVbY2xpY2tlZFRpbGVdIC8vIHRvZ2dsZSBiZXR3ZWVuIHZhbHVlc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVyYnMgOihcbiAgICB9XG5cbiAgICBhcHBseVN0YXRlKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5mb3JFYWNoKHBvcyA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtwb3NdKSB7XG4gICAgICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IHRpbGVzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3Bvcz0ke3Bvc31dYCkuZm9yRWFjaChlbGUgPT4gZWxlLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKSlcbiAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHQgd29yZHNcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAud29yZC4ke3Bvc31gKS5mb3JFYWNoKGVsZSA9PiBlbGUuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpKVxuICAgICAgICAgICAgICAgIC8vIGVuYWJsZSBjbGVhciBidXR0b25cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLXRpbGVcIikuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0c09mU3BlZWNoVmlldztcbiJdLCJuYW1lcyI6WyJQYXJ0c09mU3BlZWNoVmlldyIsImNvbnN0cnVjdG9yIiwicG9zRWwiLCJwb3NQcmVzZW50Iiwibm9uU3ViVmVyYnMiLCJzdGF0ZSIsImZvckVhY2giLCJwb3MiLCJ1bmRlZmluZWQiLCJwb3B1bGF0ZVdvcmRUaWxlcyIsInJlcGxhY2VDaGlsZHJlbiIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicGFydE9mU3BlZWNoIiwibmV3VGlsZSIsImNyZWF0ZVdvcmRUaWxlIiwiY29udGFpbnMiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJjcmVhdGVDbGVhclRpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25UaWxlQ2xpY2siLCJiaW5kIiwibGkiLCJpbmNsdWRlcyIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrZWRUaWxlIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiY2xlYXJBbGwiLCJ1cGRhdGVTdGF0ZSIsImFwcGx5U3RhdGUiLCJjbGVhclRpbGVzIiwiY2xlYXJXb3JkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGUiLCJyZW1vdmUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/parts-of-speech-view.js\n");

/***/ }),

/***/ "./src/scripts/poem-view.js":
/*!**********************************!*\
  !*** ./src/scripts/poem-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PoemView {\n  constructor(poemEl, poemName, poemMetaData, setupCallback) {\n    this.poemEl = poemEl;\n    this.poemName = poemName;\n    this.metaData = poemMetaData;\n    this.posPresent = [];\n    this.poem = this.grabPoem(poemName, setupCallback);\n  }\n  grabPoem(poemName, callback) {\n    const res = fetch(`./data/data.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.poem = retrieval[poemName];\n      this.setUpPoem();\n    }).catch(errorResponse => console.log(errorResponse)).then(() => callback(this));\n  }\n  setUpPoem() {\n    const lineCount = Object.keys(this.poem).length;\n    for (let lineNum = 0; lineNum < lineCount - 1; lineNum++) {\n      // exclude metadata\n      if (this.poem[lineNum] === \"break\") {\n        const br = document.createElement(\"br\");\n        br.classList.add(`line-${lineNum}-spanish`);\n        this.poemEl.append(br);\n      } else {\n        const ul = document.createElement(\"ul\");\n        const filledLine = this.populateLine(this.poem[lineNum], ul);\n        filledLine.classList.add(`${lineNum}`);\n        this.addToolTip(filledLine);\n        this.poemEl.append(filledLine);\n      }\n    }\n    this.displayMetaData();\n  }\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1;\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      if (jsonLine[ele].verb_subset) {\n        li.classList.add(jsonLine[ele].verb_subset);\n        this.trackPoS(jsonLine[ele].verb_subset);\n      }\n      li.classList.add(jsonLine[ele].part_of_speech, \"word\");\n      li.innerText = jsonLine[ele].word;\n      ul.append(li);\n      this.trackPoS(jsonLine[ele].part_of_speech);\n    }\n    return ul;\n  }\n  trackPoS(pos) {\n    if (!this.posPresent.includes(pos) && pos !== undefined) {\n      this.posPresent.push(pos);\n    }\n  }\n  getPoSPresent() {\n    return this.posPresent;\n  }\n  addToolTip(line) {\n    const tooltipEl = document.createElement(\"span\");\n    tooltipEl.classList.add(\"tooltiptext\");\n    const translation = this.poem[line.classList].translation; // should be line num\n    tooltipEl.innerText = translation;\n    line.classList.add(\"tooltip\");\n    line.append(tooltipEl);\n  }\n  displayMetaData() {\n    const h2 = document.createElement(\"h2\");\n    h2.append(this.poem.metadata.title);\n    this.metaData.append(h2);\n    const h3 = document.createElement(\"h3\");\n    h3.append(\"por \" + this.poem.metadata.poet);\n    this.metaData.append(h3);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsR0FBRyxJQUFJLENBQUM5QyxJQUFJLENBQUM0QyxJQUFJLENBQUN0QixTQUFTLENBQUMsQ0FBQ3dCLFdBQVcsRUFBQztJQUMxREQsU0FBUyxDQUFDUixTQUFTLEdBQUdTLFdBQVc7SUFDakNGLElBQUksQ0FBQ3RCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM3QnFCLElBQUksQ0FBQ3BCLE1BQU0sQ0FBQ3FCLFNBQVMsQ0FBQztFQUMxQjtFQUVBaEIsZUFBZUEsQ0FBQSxFQUFHO0lBQ2QsTUFBTWtCLEVBQUUsR0FBRzNCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2QzBCLEVBQUUsQ0FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUN4QixJQUFJLENBQUNnRCxRQUFRLENBQUNDLEtBQUssQ0FBQztJQUNuQyxJQUFJLENBQUNuRCxRQUFRLENBQUMwQixNQUFNLENBQUN1QixFQUFFLENBQUM7SUFFeEIsTUFBTUcsRUFBRSxHQUFHOUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDNkIsRUFBRSxDQUFDMUIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUN4QixJQUFJLENBQUNnRCxRQUFRLENBQUNHLElBQUksQ0FBQztJQUMzQyxJQUFJLENBQUNyRCxRQUFRLENBQUMwQixNQUFNLENBQUMwQixFQUFFLENBQUM7RUFDNUI7QUFDSjtBQUVBLCtEQUFlMUQsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL3NjcmlwdHMvcG9lbS12aWV3LmpzPzU4MzciXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUG9lbVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKHBvZW1FbCwgcG9lbU5hbWUsIHBvZW1NZXRhRGF0YSwgc2V0dXBDYWxsYmFjaykge1xuICAgICAgICB0aGlzLnBvZW1FbCA9IHBvZW1FbFxuICAgICAgICB0aGlzLnBvZW1OYW1lID0gcG9lbU5hbWVcbiAgICAgICAgdGhpcy5tZXRhRGF0YSA9IHBvZW1NZXRhRGF0YVxuICAgICAgICB0aGlzLnBvc1ByZXNlbnQgPSBbXVxuICAgICAgICB0aGlzLnBvZW0gPSB0aGlzLmdyYWJQb2VtKHBvZW1OYW1lLCBzZXR1cENhbGxiYWNrKVxuXG4gICAgfVxuXG4gICAgZ3JhYlBvZW0ocG9lbU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKGAuL2RhdGEvZGF0YS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXRyaWV2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9lbSA9IHJldHJpZXZhbFtwb2VtTmFtZV1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFVwUG9lbSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yUmVzcG9uc2UgPT4gY29uc29sZS5sb2coZXJyb3JSZXNwb25zZSkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiBjYWxsYmFjayh0aGlzKSlcbiAgICB9XG5cbiAgICBzZXRVcFBvZW0oKSB7XG4gICAgICAgIGNvbnN0IGxpbmVDb3VudCA9IE9iamVjdC5rZXlzKHRoaXMucG9lbSkubGVuZ3RoXG5cbiAgICAgICAgZm9yIChsZXQgbGluZU51bSA9IDA7IGxpbmVOdW0gPCBsaW5lQ291bnQgLSAxOyBsaW5lTnVtKyspIHsgLy8gZXhjbHVkZSBtZXRhZGF0YVxuICAgICAgICAgICAgaWYgKHRoaXMucG9lbVtsaW5lTnVtXSA9PT0gXCJicmVha1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcbiAgICAgICAgICAgICAgICBici5jbGFzc0xpc3QuYWRkKGBsaW5lLSR7bGluZU51bX0tc3BhbmlzaGApXG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtRWwuYXBwZW5kKGJyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxlZExpbmUgPSB0aGlzLnBvcHVsYXRlTGluZSh0aGlzLnBvZW1bbGluZU51bV0sIHVsKVxuICAgICAgICAgICAgICAgIGZpbGxlZExpbmUuY2xhc3NMaXN0LmFkZChgJHtsaW5lTnVtfWApXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRUb29sVGlwKGZpbGxlZExpbmUpXG4gICAgICAgICAgICAgICAgdGhpcy5wb2VtRWwuYXBwZW5kKGZpbGxlZExpbmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNwbGF5TWV0YURhdGEoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgdWwpIHtcbiAgICAgICAgY29uc3Qgd29yZENvdW50ID0gT2JqZWN0LmtleXMoanNvbkxpbmUpLmxlbmd0aCAtIDFcbiAgICAgICAgZm9yIChsZXQgZWxlID0gMDsgZWxlIDwgd29yZENvdW50OyBlbGUrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgICAgIGlmIChqc29uTGluZVtlbGVdLnZlcmJfc3Vic2V0KSB7XG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChqc29uTGluZVtlbGVdLnZlcmJfc3Vic2V0KVxuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tQb1MoanNvbkxpbmVbZWxlXS52ZXJiX3N1YnNldClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChqc29uTGluZVtlbGVdLnBhcnRfb2Zfc3BlZWNoLCBcIndvcmRcIilcbiAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IGpzb25MaW5lW2VsZV0ud29yZFxuICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG4gICAgICAgICAgICB0aGlzLnRyYWNrUG9TKGpzb25MaW5lW2VsZV0ucGFydF9vZl9zcGVlY2gpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVsXG4gICAgfVxuXG4gICAgdHJhY2tQb1MocG9zKSB7XG4gICAgICAgIGlmICghdGhpcy5wb3NQcmVzZW50LmluY2x1ZGVzKHBvcykgJiYgcG9zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucG9zUHJlc2VudC5wdXNoKHBvcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBvU1ByZXNlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1ByZXNlbnRcbiAgICB9XG5cbiAgICBhZGRUb29sVGlwKGxpbmUpIHtcbiAgICAgICAgY29uc3QgdG9vbHRpcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgdG9vbHRpcEVsLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwdGV4dFwiKVxuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMucG9lbVtsaW5lLmNsYXNzTGlzdF0udHJhbnNsYXRpb24gLy8gc2hvdWxkIGJlIGxpbmUgbnVtXG4gICAgICAgIHRvb2x0aXBFbC5pbm5lclRleHQgPSB0cmFuc2xhdGlvblxuICAgICAgICBsaW5lLmNsYXNzTGlzdC5hZGQoXCJ0b29sdGlwXCIpXG4gICAgICAgIGxpbmUuYXBwZW5kKHRvb2x0aXBFbClcbiAgICB9XG5cbiAgICBkaXNwbGF5TWV0YURhdGEoKSB7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgICAgIGgyLmFwcGVuZCh0aGlzLnBvZW0ubWV0YWRhdGEudGl0bGUpXG4gICAgICAgIHRoaXMubWV0YURhdGEuYXBwZW5kKGgyKVxuXG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgIGgzLmFwcGVuZChcInBvciBcIiArIHRoaXMucG9lbS5tZXRhZGF0YS5wb2V0KVxuICAgICAgICB0aGlzLm1ldGFEYXRhLmFwcGVuZChoMylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvZW1WaWV3O1xuIl0sIm5hbWVzIjpbIlBvZW1WaWV3IiwiY29uc3RydWN0b3IiLCJwb2VtRWwiLCJwb2VtTmFtZSIsInBvZW1NZXRhRGF0YSIsInNldHVwQ2FsbGJhY2siLCJtZXRhRGF0YSIsInBvc1ByZXNlbnQiLCJwb2VtIiwiZ3JhYlBvZW0iLCJjYWxsYmFjayIsInJlcyIsImZldGNoIiwidGhlbiIsIm9rIiwianNvbiIsInJldHJpZXZhbCIsInNldFVwUG9lbSIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5lQ291bnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibGluZU51bSIsImJyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwidWwiLCJmaWxsZWRMaW5lIiwicG9wdWxhdGVMaW5lIiwiYWRkVG9vbFRpcCIsImRpc3BsYXlNZXRhRGF0YSIsImpzb25MaW5lIiwid29yZENvdW50IiwiZWxlIiwibGkiLCJ2ZXJiX3N1YnNldCIsInRyYWNrUG9TIiwicGFydF9vZl9zcGVlY2giLCJpbm5lclRleHQiLCJ3b3JkIiwicG9zIiwiaW5jbHVkZXMiLCJ1bmRlZmluZWQiLCJwdXNoIiwiZ2V0UG9TUHJlc2VudCIsImxpbmUiLCJ0b29sdGlwRWwiLCJ0cmFuc2xhdGlvbiIsImgyIiwibWV0YWRhdGEiLCJ0aXRsZSIsImgzIiwicG9ldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/poem-view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0c3BhbmlzaC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;