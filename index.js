console.log("Comming soon: "+ require('./package.json').name)
module.exports = () => {
try {
if (window.location && process.browser) {
return true; 
} catch (e) {
return false;
}
}
}
