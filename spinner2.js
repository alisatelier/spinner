const spinnerFrames = ['|', '/', '-', '\\', '|', '-', '/', '|'];

spinnerFrames.forEach((frame, i)=>{
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `)
  }, 200 * i);
})