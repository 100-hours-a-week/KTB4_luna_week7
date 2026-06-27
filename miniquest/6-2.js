function waitForMessage() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Hello, Async/Await!"), 1000);
    });
};

async function main() {
  console.log(await waitForMessage());
}

main();