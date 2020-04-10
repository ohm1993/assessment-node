
export default function asynchronousDelay(delay, callback) {
  setTimeout(function () {
    console.log("haha")
    callback();
  }, delay)
}
