<script>
  let loading=false
  let email=''
  let successmsg='Awesome, check your email for next steps!'
  let errormsg=''
    import { supabase } from "$lib/supabaseClient";
    import { error } from "@sveltejs/kit";
  const authorise=async()=>{
    loading=true
    const {data,error}=await supabase.auth.signInWithOtp({
      email,
      options:{
        shouldCreateUser:true,
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })
    if(error){
      errormsg=error.message
      alert(errormsg)
    }
    else{
      alert(successmsg)
    }
    errormsg=''
    loading=false;
  }
  // loading=false;
</script>

<main class="landing-page">


  <section class="hero">
    <h1 class="hero-title">Get Referred. Get Hired.</h1>
    <p class="hero-subtitle">
      Referly connects job seekers with insiders from top companies and startups. Chat directly with referrers and land your dream role—free for now.
    </p>

    
    <form class="magic-link-form"
    on:submit={authorise}
    >
      <input 
      bind:value={email}
        type="email" 
        placeholder="Enter your email" 
        class="magic-link-input"
      />
      <button 
      disabled={loading}
        type="submit" 
        class="magic-link-button"
      >
        {#if loading}
          Please wait..
        {:else}
          Go!
        {/if}
      </button>
    </form>
    <p class="hero-note">No account needed. Check your email to login instantly.</p>
    
  </section>

  <!-- Features Section -->
  <section class="features">
    <h2 class="features-title">Why Referly?</h2>
    <div class="features-grid">
      <div class="feature-card">
        <h3 class="feature-title">Direct Chat</h3>
        <p>Connect instantly with referrers from top companies.</p>
      </div>
      <div class="feature-card">
        <h3 class="feature-title">Top Companies</h3>
        <p>Get referrals from Big 4, PBCs, and YC-backed startups.</p>
      </div>
      <div class="feature-card">
        <h3 class="feature-title">Free & Easy</h3>
        <p>No hidden fees. Simple email login with magic links.</p>
      </div>
    </div>
  </section>

  
  <section class="social-proof">
    <h2 class="social-title">Trusted by Job Seekers Everywhere</h2>
    <div class="social-logos">
      
      <svg class="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3">
        <path fill="#4285F4" d="M533.5 278.4c0-17.7-1.5-35-4.3-51.9H272v98.2h146.9c-6.3 33.9-25 62.6-53.4 82v68.2h86.3c50.5-46.5 81.7-115 81.7-196.5z"/>
        <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24 178.2-65.2l-86.3-68.2c-24 16-54.6 25.4-91.9 25.4-70.7 0-130.7-47.7-152.1-111.8h-89.6v70.1c44.7 88.1 135.8 150.7 241.7 150.7z"/>
        <path fill="#FBBC05" d="M119.9 343.6c-10.4-30.4-10.4-63.2 0-93.6v-70.1h-89.6c-39.5 77.1-39.5 168.9 0 246l89.6-82.3z"/>
        <path fill="#EA4335" d="M272 107.7c38.8-.6 75.9 14 104.2 41.3l78.1-78.1C405.1 24.1 344.1 0 272 0 166.1 0 75 62.6 30.3 150.7l89.6 70.1C141.3 155.4 201.3 107.7 272 107.7z"/>
      </svg>

      
      <svg class="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
        <path fill="#FF9900" d="M0 0h250v250H0z"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="60" font-family="Arial, sans-serif">A</text>
      </svg>

     
      <svg class="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
        <circle cx="125" cy="125" r="125" fill="#FF6200"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="60" font-family="Arial, sans-serif">YC</text>
      </svg>

      
      <svg class="social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
        <rect width="250" height="250" rx="50" fill="#1877F2"/>
        <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" fill="#fff" font-size="60" font-family="Arial, sans-serif">f</text>
      </svg>
    </div>
  </section>

  
  <footer class="footer">
    Made with ❤️ by Sundaram
  </footer>
</main>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}


.hero {
  background: linear-gradient(to right, #4f46e5, #8b5cf6);
  color: white;
  text-align: center;
  padding: 80px 20px;
}
.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}
.hero-subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 40px auto;
}
.magic-link-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 500px;
  margin: 0 auto;
}
@media(min-width: 640px) {
  .magic-link-form {
    flex-direction: row;
  }
}
.magic-link-input {
  padding: 15px;
  border-radius: 6px;
  border: none;
  flex: 1;
  font-size: 1rem;
}
.magic-link-button {
  padding: 15px 30px;
  background-color: #facc15;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
.magic-link-button:hover {
  background-color: #fbbf24;
}
.hero-note {
  margin-top: 10px;
  font-size: 0.875rem;
  opacity: 0.8;
}


.features {
  text-align: center;
  padding: 80px 20px;
  background-color: #f9fafb;
}
.features-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
}
.features-grid {
  display: grid;
  gap: 30px;
}
@media(min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    margin: 0 auto;
  }
}
.feature-card {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;
}
.feature-card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

/* Social Proof Section */
.social-proof {
  text-align: center;
  padding: 80px 20px;
  background-color: #f3f4f6;
}
.social-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
}
.social-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}
.social-logo {
  height: 50px;
  width: auto;
  opacity: 0.7;
}

/* Footer */
.footer {
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 30px 20px;
}
</style>
