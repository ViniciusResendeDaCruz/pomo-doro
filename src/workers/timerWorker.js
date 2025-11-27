let isRunning = false;
self.onmessage = (event) => {
    console.log('message received');
    if (isRunning) return;

    isRunning = true;

    const state = event.data;

    const { activeTask, secondsRemaining } = state;

    const endDate = activeTask.startsAt + secondsRemaining * 1000;
    // const now = Date.now();
    // let countDownSeconds = Math.ceil((endDate - now) / 1000);

    function tick() {
        // self.postMessage(countDownSeconds);
        
        const now = Date.now();
        const countDownSeconds = Math.ceil((endDate - now) / 1000);
        // const countDownSeconds = Math.floor((endDate - now) / 1000);
        
        self.postMessage(countDownSeconds);

        setTimeout(tick, 1000);
    }

    tick();
};

