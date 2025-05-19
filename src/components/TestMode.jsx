function TestMode() {
  return (
    <div className="bg-expensive-green relative z-50 flex gap-5 text-primary-foreground overflow-x-hidden">
      {Array.from({ length: 30 }, (_, index) => {
        return (
          <p
            className="animate-test-mode text-xs whitespace-nowrap"
            key={index}
          >
            Sayt test rejimida ishlamoqda
          </p>
        );
      })}
    </div>
  );
}

export default TestMode;
