"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import Link from "next/link";
import './mainPage.css';

Amplify.configure(outputs);

export default function App() {
  

  return (

    <main>

      <nav className="about-navbar">
        <div className="navbar-brand">SwingInfo</div>
        <Link href="/About" className="navbar-link">About</Link>
      </nav>

      <div className="intro-div">
        <h1>Welcome Traders</h1>
        <p>SwingInfo is a simple, fast app built for traders who need quick
          access to stock swing data. Just enter a stock's ticker symbol,
          and the app instantly returns its most recent swing high and low.
          No clutter, no noise—just the essential price levels to help guide
          your trading decisions.</p> 
          <h3>Login or Sign Up to Access our Application</h3>
      </div>
      
      <Authenticator>

        <div className="app-div">
          <h2>Stock Search Application</h2>
          <Link className="app-button" href="/SearchStock">Seach Stocks</Link>
        </div>

      </Authenticator>

    </main>

  );
}
