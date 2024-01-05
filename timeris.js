function CountdownTimer(duration, callback) {
    let intervalId = null;
  
    function start() {
      intervalId = setInterval(() => {
        duration--;
  
        if (duration <= 0) {
          stop();
          if (typeof callback === 'function') {
            callback();
          }
        }
      }, 1000);
    }
  
    function stop() {
      clearInterval(intervalId);
    }
  
    function getDuration() {
      return duration;
    }
  
    return { start, stop, getDuration };
  }
  
  export default CountdownTimer;