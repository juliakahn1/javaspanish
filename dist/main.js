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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/poem-view */ \"./src/scripts/poem-view.js\");\n/* harmony import */ var _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/parts-of-speech-view */ \"./src/scripts/parts-of-speech-view.js\");\n\n\nwindow.PoemView = _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nwindow.PartsOfSpeechView = _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n// container for title/poet\nconst poemMetaData = document.querySelector(\".poem-metadata\");\n// container for poems\nconst poemEl = document.querySelector(\".poem\");\n// container for parts of speech\nconst posEl = document.querySelector(\".pos\");\n\n// testing — CHANGE TO DROPDOWN\nconst poem = new _scripts_poem_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](poemEl, \"machado\", poemMetaData);\nwindow.poem = poem;\nconst pos = new _scripts_parts_of_speech_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](posEl);\nwindow.pos = pos;\n\n// pass in poem that is selected\n// event listener on nav button for poem\n\n// EVENTS\n\n// when tile is clicked and unclicked\n// change the class of the words with the matching class (i.e. verb => highlighted-verb)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBDO0FBQ29CO0FBRzlERSxNQUFNLENBQUNGLFFBQVEsR0FBR0EsMERBQVE7QUFDMUJFLE1BQU0sQ0FBQ0QsaUJBQWlCLEdBQUdBLHFFQUFpQjs7QUFFNUM7QUFDQSxNQUFNRSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0FBQzdEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDOUM7QUFDQSxNQUFNRSxLQUFLLEdBQUdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7QUFHNUM7QUFDQSxNQUFNRyxJQUFJLEdBQUcsSUFBSVIsMERBQVEsQ0FBQ00sTUFBTSxFQUFFLFNBQVMsRUFBRUgsWUFBWSxDQUFDO0FBQzFERCxNQUFNLENBQUNNLElBQUksR0FBR0EsSUFBSTtBQUVsQixNQUFNQyxHQUFHLEdBQUcsSUFBSVIscUVBQWlCLENBQUNNLEtBQUssQ0FBQztBQUN4Q0wsTUFBTSxDQUFDTyxHQUFHLEdBQUdBLEdBQUc7O0FBR2hCO0FBQ0E7O0FBR0E7O0FBRUE7QUFDSSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRzcGFuaXNoLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvZW1WaWV3IGZyb20gXCIuL3NjcmlwdHMvcG9lbS12aWV3XCJcbmltcG9ydCBQYXJ0c09mU3BlZWNoVmlldyBmcm9tIFwiLi9zY3JpcHRzL3BhcnRzLW9mLXNwZWVjaC12aWV3XCJcblxuXG53aW5kb3cuUG9lbVZpZXcgPSBQb2VtVmlld1xud2luZG93LlBhcnRzT2ZTcGVlY2hWaWV3ID0gUGFydHNPZlNwZWVjaFZpZXdcblxuLy8gY29udGFpbmVyIGZvciB0aXRsZS9wb2V0XG5jb25zdCBwb2VtTWV0YURhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvZW0tbWV0YWRhdGFcIilcbi8vIGNvbnRhaW5lciBmb3IgcG9lbXNcbmNvbnN0IHBvZW1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9lbVwiKTtcbi8vIGNvbnRhaW5lciBmb3IgcGFydHMgb2Ygc3BlZWNoXG5jb25zdCBwb3NFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zXCIpXG5cblxuLy8gdGVzdGluZyDigJQgQ0hBTkdFIFRPIERST1BET1dOXG5jb25zdCBwb2VtID0gbmV3IFBvZW1WaWV3KHBvZW1FbCwgXCJtYWNoYWRvXCIsIHBvZW1NZXRhRGF0YSlcbndpbmRvdy5wb2VtID0gcG9lbVxuXG5jb25zdCBwb3MgPSBuZXcgUGFydHNPZlNwZWVjaFZpZXcocG9zRWwpXG53aW5kb3cucG9zID0gcG9zXG5cblxuLy8gcGFzcyBpbiBwb2VtIHRoYXQgaXMgc2VsZWN0ZWRcbi8vIGV2ZW50IGxpc3RlbmVyIG9uIG5hdiBidXR0b24gZm9yIHBvZW1cblxuXG4vLyBFVkVOVFNcblxuLy8gd2hlbiB0aWxlIGlzIGNsaWNrZWQgYW5kIHVuY2xpY2tlZFxuICAgIC8vIGNoYW5nZSB0aGUgY2xhc3Mgb2YgdGhlIHdvcmRzIHdpdGggdGhlIG1hdGNoaW5nIGNsYXNzIChpLmUuIHZlcmIgPT4gaGlnaGxpZ2h0ZWQtdmVyYilcbiJdLCJuYW1lcyI6WyJQb2VtVmlldyIsIlBhcnRzT2ZTcGVlY2hWaWV3Iiwid2luZG93IiwicG9lbU1ldGFEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9lbUVsIiwicG9zRWwiLCJwb2VtIiwicG9zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/parts-of-speech-view.js":
/*!*********************************************!*\
  !*** ./src/scripts/parts-of-speech-view.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PartsOfSpeechView {\n  constructor(posEl) {\n    this.posEl = posEl;\n    this.populateWordTags();\n  }\n  populateWordTags() {\n    // should this be a class var?\n    const categories = [\"noun\", \"verb\", \"adjective\", \"adverb\", \"article\", \"pronoun\", \"preposition\", \"conjunction\"];\n    const ul = document.createElement(\"ul\");\n    ul.classList.add(\"pos-list\");\n    categories.forEach(partOfSpeech => {\n      ul.append(this.createWordTag(partOfSpeech));\n    });\n    this.posEl.append(ul);\n    this.posEl.addEventListener(\"click\", this.highlightWords);\n  }\n  createWordTag(partOfSpeech) {\n    const li = document.createElement(\"li\");\n    li.innerText = partOfSpeech;\n    li.classList.add(\"pos-tile\");\n    li.setAttribute(\"id\", `${partOfSpeech}`);\n    return li;\n  }\n\n  // install an event listener\n\n  highlightWords(e) {\n    e.preventDefault();\n\n    // find the class of button pressed\n    const buttonId = e.target.id;\n    e.srcElement.classList.toggle(\"selected\");\n    // console.log(e)\n\n    // change color of button — toggle\n\n    const changingWords = document.querySelectorAll(`.${buttonId}`);\n    changingWords.forEach(word => {\n      word.classList.toggle(\"selected\");\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartsOfSpeechView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlldy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsaUJBQWlCLENBQUM7RUFFcEJDLFdBQVdBLENBQUNDLEtBQUssRUFBRTtJQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztFQUMzQjtFQUVBQSxnQkFBZ0JBLENBQUEsRUFBRztJQUNmO0lBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUM5RyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q0YsRUFBRSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDNUJMLFVBQVUsQ0FBQ00sT0FBTyxDQUFDQyxZQUFZLElBQUk7TUFDL0JOLEVBQUUsQ0FBQ08sTUFBTSxDQUFDLElBQUksQ0FBQ0MsYUFBYSxDQUFDRixZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7SUFDRixJQUFJLENBQUNULEtBQUssQ0FBQ1UsTUFBTSxDQUFDUCxFQUFFLENBQUM7SUFFckIsSUFBSSxDQUFDSCxLQUFLLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztFQUM3RDtFQUdBRixhQUFhQSxDQUFDRixZQUFZLEVBQUU7SUFDeEIsTUFBTUssRUFBRSxHQUFHVixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNTLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHTixZQUFZO0lBQzNCSyxFQUFFLENBQUNSLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUM1Qk8sRUFBRSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFHLEdBQUVQLFlBQWEsRUFBQyxDQUFDO0lBQ3hDLE9BQU9LLEVBQUU7RUFDYjs7RUFFQTs7RUFFQUQsY0FBY0EsQ0FBQ0ksQ0FBQyxFQUFFO0lBQ2RBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7O0lBRWxCO0lBQ0EsTUFBTUMsUUFBUSxHQUFHRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsRUFBRTtJQUM1QkosQ0FBQyxDQUFDSyxVQUFVLENBQUNoQixTQUFTLENBQUNpQixNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3pDOztJQUVBOztJQUVBLE1BQU1DLGFBQWEsR0FBR3BCLFFBQVEsQ0FBQ3FCLGdCQUFnQixDQUFFLElBQUdOLFFBQVMsRUFBQyxDQUFDO0lBRS9ESyxhQUFhLENBQUNoQixPQUFPLENBQUNrQixJQUFJLElBQUk7TUFDMUJBLElBQUksQ0FBQ3BCLFNBQVMsQ0FBQ2lCLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQ047QUFFSjtBQUVBLCtEQUFlekIsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9wYXJ0cy1vZi1zcGVlY2gtdmlldy5qcz85NzM1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBhcnRzT2ZTcGVlY2hWaWV3IHtcblxuICAgIGNvbnN0cnVjdG9yKHBvc0VsKSB7XG4gICAgICAgIHRoaXMucG9zRWwgPSBwb3NFbFxuICAgICAgICB0aGlzLnBvcHVsYXRlV29yZFRhZ3MoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlV29yZFRhZ3MoKSB7XG4gICAgICAgIC8vIHNob3VsZCB0aGlzIGJlIGEgY2xhc3MgdmFyP1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1wibm91blwiLCBcInZlcmJcIiwgXCJhZGplY3RpdmVcIiwgXCJhZHZlcmJcIiwgXCJhcnRpY2xlXCIsIFwicHJvbm91blwiLCBcInByZXBvc2l0aW9uXCIsIFwiY29uanVuY3Rpb25cIl1cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZChcInBvcy1saXN0XCIpXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChwYXJ0T2ZTcGVlY2ggPT4ge1xuICAgICAgICAgICAgdWwuYXBwZW5kKHRoaXMuY3JlYXRlV29yZFRhZyhwYXJ0T2ZTcGVlY2gpKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBvc0VsLmFwcGVuZCh1bClcblxuICAgICAgICB0aGlzLnBvc0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhpZ2hsaWdodFdvcmRzKVxuICAgIH1cblxuXG4gICAgY3JlYXRlV29yZFRhZyhwYXJ0T2ZTcGVlY2gpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gcGFydE9mU3BlZWNoXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJwb3MtdGlsZVwiKVxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwYXJ0T2ZTcGVlY2h9YClcbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgLy8gaW5zdGFsbCBhbiBldmVudCBsaXN0ZW5lclxuXG4gICAgaGlnaGxpZ2h0V29yZHMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAvLyBmaW5kIHRoZSBjbGFzcyBvZiBidXR0b24gcHJlc3NlZFxuICAgICAgICBjb25zdCBidXR0b25JZCA9IGUudGFyZ2V0LmlkXG4gICAgICAgIGUuc3JjRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIilcbiAgICAgICAgLy8gY29uc29sZS5sb2coZSlcblxuICAgICAgICAvLyBjaGFuZ2UgY29sb3Igb2YgYnV0dG9uIOKAlCB0b2dnbGVcblxuICAgICAgICBjb25zdCBjaGFuZ2luZ1dvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7YnV0dG9uSWR9YClcblxuICAgICAgICBjaGFuZ2luZ1dvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgICB3b3JkLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKVxuICAgICAgICB9KVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0c09mU3BlZWNoVmlldztcbiJdLCJuYW1lcyI6WyJQYXJ0c09mU3BlZWNoVmlldyIsImNvbnN0cnVjdG9yIiwicG9zRWwiLCJwb3B1bGF0ZVdvcmRUYWdzIiwiY2F0ZWdvcmllcyIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsInBhcnRPZlNwZWVjaCIsImFwcGVuZCIsImNyZWF0ZVdvcmRUYWciLCJhZGRFdmVudExpc3RlbmVyIiwiaGlnaGxpZ2h0V29yZHMiLCJsaSIsImlubmVyVGV4dCIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbklkIiwidGFyZ2V0IiwiaWQiLCJzcmNFbGVtZW50IiwidG9nZ2xlIiwiY2hhbmdpbmdXb3JkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/parts-of-speech-view.js\n");

/***/ }),

/***/ "./src/scripts/poem-view.js":
/*!**********************************!*\
  !*** ./src/scripts/poem-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PoemView {\n  constructor(poemEl, poemName, poemMetaData) {\n    // poem div from the HTML via index.js\n    this.poemEl = poemEl;\n    // currently-selected poem name based on the nav\n    this.poemName = poemName;\n    // poem from data folder\n    this.poem = this.grabPoem(poemName);\n    this.metaData = poemMetaData;\n  }\n  grabPoem(poemName) {\n    const res = fetch(`./data/${poemName}.json`).then(res => {\n      if (res.ok) {\n        return res.json();\n      } else {\n        throw res;\n      }\n    }).then(retrieval => {\n      this.poem = retrieval;\n      this.setUpPoem();\n    }).catch(errorResponse => console.log(errorResponse));\n  }\n  setUpPoem() {\n    // console.log(this.poem)\n    const lineCount = Object.keys(this.poem).length;\n    for (let lineNum = 0; lineNum < lineCount - 1; lineNum++) {\n      // exclude metadata\n      const ul = document.createElement(\"ul\");\n      const filledLine = this.populateLine(this.poem[lineNum], ul);\n      filledLine.classList.add(`line-${lineNum}-spanish`);\n      this.poemEl.append(filledLine);\n    }\n    this.displayMetaData();\n  }\n  populateLine(jsonLine, ul) {\n    const wordCount = Object.keys(jsonLine).length - 1; // exclude \"translation\" key\n    for (let ele = 0; ele < wordCount; ele++) {\n      const li = document.createElement(\"li\");\n      li.classList.add(jsonLine[ele].part_of_speech);\n      li.innerText = jsonLine[ele].word;\n      ul.append(li);\n    }\n    return ul;\n  }\n  displayMetaData() {\n    // title\n    const h2 = document.createElement(\"h2\");\n    h2.append(this.poem.metadata.title);\n    this.metaData.append(h2);\n\n    // author\n    const h3 = document.createElement(\"h3\");\n    h3.append(\"por \" + this.poem.metadata.poet);\n    this.metaData.append(h3);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PoemView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO0lBQ25DLElBQUksQ0FBQ25DLFFBQVEsQ0FBQ3dCLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDOztJQUV4QjtJQUNBLE1BQU1HLEVBQUUsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q2lCLEVBQUUsQ0FBQ1osTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMxQixJQUFJLENBQUNvQyxRQUFRLENBQUNHLElBQUksQ0FBQztJQUMzQyxJQUFJLENBQUNyQyxRQUFRLENBQUN3QixNQUFNLENBQUNZLEVBQUUsQ0FBQztFQUM1QjtBQUNKO0FBRUEsK0RBQWUzQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHNwYW5pc2gvLi9zcmMvc2NyaXB0cy9wb2VtLXZpZXcuanM/NTgzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQb2VtVmlldyB7XG4gICAgY29uc3RydWN0b3IocG9lbUVsLCBwb2VtTmFtZSwgcG9lbU1ldGFEYXRhKSB7XG4gICAgICAgIC8vIHBvZW0gZGl2IGZyb20gdGhlIEhUTUwgdmlhIGluZGV4LmpzXG4gICAgICAgIHRoaXMucG9lbUVsID0gcG9lbUVsXG4gICAgICAgIC8vIGN1cnJlbnRseS1zZWxlY3RlZCBwb2VtIG5hbWUgYmFzZWQgb24gdGhlIG5hdlxuICAgICAgICB0aGlzLnBvZW1OYW1lID0gcG9lbU5hbWVcbiAgICAgICAgLy8gcG9lbSBmcm9tIGRhdGEgZm9sZGVyXG4gICAgICAgIHRoaXMucG9lbSA9IHRoaXMuZ3JhYlBvZW0ocG9lbU5hbWUpXG4gICAgICAgIHRoaXMubWV0YURhdGEgPSBwb2VtTWV0YURhdGFcbiAgICB9XG5cbiAgICBncmFiUG9lbShwb2VtTmFtZSkgIHtcbiAgICAgICAgY29uc3QgcmVzID0gZmV0Y2goYC4vZGF0YS8ke3BvZW1OYW1lfS5qc29uYClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXRyaWV2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9lbSA9IHJldHJpZXZhbFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXBQb2VtKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3JSZXNwb25zZSA9PiBjb25zb2xlLmxvZyhlcnJvclJlc3BvbnNlKSlcbiAgICB9XG5cbiAgICBzZXRVcFBvZW0oKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucG9lbSlcbiAgICAgICAgY29uc3QgbGluZUNvdW50ID0gT2JqZWN0LmtleXModGhpcy5wb2VtKS5sZW5ndGhcblxuICAgICAgICBmb3IgKGxldCBsaW5lTnVtID0gMDsgbGluZU51bSA8IGxpbmVDb3VudCAtIDE7IGxpbmVOdW0rKykgeyAvLyBleGNsdWRlIG1ldGFkYXRhXG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICAgICAgY29uc3QgZmlsbGVkTGluZSA9IHRoaXMucG9wdWxhdGVMaW5lKHRoaXMucG9lbVtsaW5lTnVtXSwgdWwpXG4gICAgICAgICAgICBmaWxsZWRMaW5lLmNsYXNzTGlzdC5hZGQoYGxpbmUtJHtsaW5lTnVtfS1zcGFuaXNoYClcbiAgICAgICAgICAgIHRoaXMucG9lbUVsLmFwcGVuZChmaWxsZWRMaW5lKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5TWV0YURhdGEoKVxuICAgIH1cblxuICAgIHBvcHVsYXRlTGluZShqc29uTGluZSwgdWwpIHtcbiAgICAgICAgY29uc3Qgd29yZENvdW50ID0gT2JqZWN0LmtleXMoanNvbkxpbmUpLmxlbmd0aCAtIDEgLy8gZXhjbHVkZSBcInRyYW5zbGF0aW9uXCIga2V5XG4gICAgICAgIGZvciAobGV0IGVsZSA9IDA7IGVsZSA8IHdvcmRDb3VudDsgZWxlKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKGpzb25MaW5lW2VsZV0ucGFydF9vZl9zcGVlY2gpXG4gICAgICAgICAgICBsaS5pbm5lclRleHQgPSBqc29uTGluZVtlbGVdLndvcmRcbiAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWxcbiAgICB9XG5cbiAgICBkaXNwbGF5TWV0YURhdGEoKSB7XG4gICAgICAgIC8vIHRpdGxlXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgICAgIGgyLmFwcGVuZCh0aGlzLnBvZW0ubWV0YWRhdGEudGl0bGUpXG4gICAgICAgIHRoaXMubWV0YURhdGEuYXBwZW5kKGgyKVxuXG4gICAgICAgIC8vIGF1dGhvclxuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBoMy5hcHBlbmQoXCJwb3IgXCIgKyB0aGlzLnBvZW0ubWV0YWRhdGEucG9ldClcbiAgICAgICAgdGhpcy5tZXRhRGF0YS5hcHBlbmQoaDMpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2VtVmlldztcbiJdLCJuYW1lcyI6WyJQb2VtVmlldyIsImNvbnN0cnVjdG9yIiwicG9lbUVsIiwicG9lbU5hbWUiLCJwb2VtTWV0YURhdGEiLCJwb2VtIiwiZ3JhYlBvZW0iLCJtZXRhRGF0YSIsInJlcyIsImZldGNoIiwidGhlbiIsIm9rIiwianNvbiIsInJldHJpZXZhbCIsInNldFVwUG9lbSIsImNhdGNoIiwiZXJyb3JSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsaW5lQ291bnQiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibGluZU51bSIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZmlsbGVkTGluZSIsInBvcHVsYXRlTGluZSIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImRpc3BsYXlNZXRhRGF0YSIsImpzb25MaW5lIiwid29yZENvdW50IiwiZWxlIiwibGkiLCJwYXJ0X29mX3NwZWVjaCIsImlubmVyVGV4dCIsIndvcmQiLCJoMiIsIm1ldGFkYXRhIiwidGl0bGUiLCJoMyIsInBvZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/poem-view.js\n");

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