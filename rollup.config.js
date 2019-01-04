const config = {
  input: 'src/juicer_feed.js',
  external: ['react'],
  output: {
   format: 'umd',
   name: 'JuicerFeed',
   globals: {
     react: 'React'
   }
  }
};

export default config;