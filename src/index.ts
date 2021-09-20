(async () => {
    const asyncFunc = async() => {
        new Promise<void>((resolve, reject) => {
            resolve();
        });
    };
    await asyncFunc();
})();