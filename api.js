Canva.DesignButton.initialize({
  apiKey: "AAGsT0H0OVc", // המפתח שלך
  designType: "presentation",
  onDesignOpen: () => console.log("נפתח Canva"),
  onDesignPublish: (event) => console.log("פורסם", event),
});
