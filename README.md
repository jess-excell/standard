# ECommerce Site
This repo contains a basic ECommerce prototype developed to practice React concepts. This prototype has been created for practice purposes only. **Do not enter any personal information into this system.** Please note that I am not a professional React developer, and you run any code at your own risk.

## Important
Just to reiterate... 
- This site is a personal prototype created for learning and demonstration purposes only. It is not a real e-commerce platform and should not be used for actual transactions. **Do not enter any personal, financial, or sensitive information.**
- Any resemblance to existing websites, businesses, or services is purely coincidental. 
- This site uses localStorage to temporarily save basket items, which are stored only in your browser and not transmitted or stored externally.
- By using this repo, you acknowledge that you are accessing a non-functional demo and agree to use it at your own discretion. If you have any questions, please raise an issue on GitHub.

## Getting Started
You can try out this system [here](https://jess-excell.github.io/standard/). Please note you need to read and accept a short disclaimer explaining that this is not a real ecommmerce system before you can access the prototype.

Alternatively, you can clone the repo, install the dependencies and run the system on your own machine by following the steps below.

```sh
git clone https://github.com/jess-excell/standard/ # Clone the repo
```
```sh
cd standard # Change directory to the program
```
```sh
npm i # Install the required dependencies
```
```sh
npm run dev # Run the development server
```
From here, you can access the server on port 5173 (i.e. [http://localhost:5173](http://localhost:5173).)

## Tests
Tests have been developed using Vitest and React Testing Library. Tests can be run using the following command:
```sh
npm test
```
Vitest provides a UI package to visualise the tests. This can be accessed at the following localhost address: [http://localhost:51204/\_\_vitest\_\_/](http://localhost:51204/__vitest__/).

Alternatively, to run tests without Vitest UI, run
```sh
npx vitest
```

## Tools / Technologies used
The table below lists the core tools and technologies used to build this system and links to their documentation.

| Tool                  | Purpose                  | Link |
|-----------------------|--------------------------|------|
| React                 | Building UI              | [https://react.dev/](https://react.dev/) |
| Vite                  | Build tool               | [https://vite.dev/](https://vite.dev/) |
| PrimeReact            | Provided UI components   | [https://primereact.org/](https://primereact.org/) |
| React Testing Library | Testing React Components | [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/) |
| Vitest                | Testing                  | [https://vitest.dev/](https://vitest.dev/) |
| FakeStoreAPI          | Provided fake store data | [https://fakestoreapi.com/docs](https://fakestoreapi.com/docs) |
