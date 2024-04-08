const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return ( 
    <div className="h-full flex items-center justify-center relative">
      {/* Background video */}
      <video autoPlay muted loop className="absolute inset-0 z-0 w-full h-full object-cover">
        <source src="/bgvv.mp4" type="video/mp4" />
        {/* Add additional sources for different video formats if needed */}
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="z-10">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
