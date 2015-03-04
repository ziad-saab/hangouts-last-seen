var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: 'https://talkgadget.google.com/*',
  contentStyleFile: require('sdk/self').data.url('style.css')
});
