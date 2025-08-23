export const globalStyles = `
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.2;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translateY(-200px) scale(1.2) rotate(180deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-500px) scale(0.3) rotate(360deg);
      opacity: 0;
    }
  }
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .animate-float {
    animation: float linear infinite;
  }
  .animate-shimmer {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 182, 193, 0.5),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 3s infinite;
  }
  .heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }
  .gradient-text {
    background: linear-gradient(135deg, #ff69b4, #dc143c, #ff1493);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 182, 193, 0.2);
  }
  .typewriter {
    overflow: hidden;
    white-space: nowrap;
    animation: typewriter 3s steps(40) 1s forwards;
  }
`;