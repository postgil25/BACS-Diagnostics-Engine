<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BACS Diagnostic Engine: Free Structural Audit (API Client)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* BACS Color Hierarchy */
        .bacs-bg-primary { background-color: #0056b3; } /* Structural Blue */
        .critical-alert { background-color: #fee2e2; color: #991b1b; border: 1px solid #f87171; } /* Critical Red */
        .sacc-cta { 
            background: linear-gradient(135deg, #FF6F00 0%, #E65100 100%); /* SACC Amber/Orange - High-Value */
            transition: transform 0.2s ease; 
        }
        .sacc-cta:hover { transform: scale(1.02); box-shadow: 0 10px 20px rgba(255, 111, 0, 0.4); }
        .bacs-cta { background-color: #0056b3; } /* Primary Blue for Go */
        .bacs-cta:hover { background-color: #004494; }

        /* Premium Aesthetic Blocks */
        .diagnosis-card {
            padding: 20px;
            background-color: #f7f9fb;
            border: 1px solid #e0e7ff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        .header-title {
            display: flex;
            align-items: center;
            font-size: 1.25rem; /* text-xl */
            font-weight: 700; /* font-bold */
            color: #1f2937; /* gray-800 */
            border-bottom: 2px solid #0056b3;
            padding-bottom: 8px;
            margin-bottom: 12px;
        }
        .header-title svg {
            margin-right: 8px;
            color: #0056b3;
        }

        /* Added style for better button interaction visual */
        .unlock-button {
            cursor: pointer;
        }
    </style>
</head>
<body class="bg-gray-100 min-h-screen p-4 flex items-center justify-center">

    <!-- Diagnostic Card -->
    <div id="diagnostic-card" class="w-full max-w-lg bg-white rounded-xl shadow-2xl p-6 sm:p-8 space-y-8">
        <header class="text-center space-y-2">
            <h1 class="text-4xl font-extrabold text-gray-900">BACS Structural Diagnostic</h1>
            <p class="text-lg text-gray-600 font-medium">Free Audit: Pinpoint the Complexity Barrier & Wasted Engagement Source.</p>
        </header>

        <!-- Input Form -->
        <div id="input-section">
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2 text-blue-800">I. Defined Technical Data Inputs (M, D, F, Copy)</h2>
            <form id="bacs-form" class="space-y-4">
                <div class="space-y-2">
                    <label for="M" class="block text-sm font-medium text-gray-700">M (Motivation) - Unique Visitors (e.g., 5000)</label>
                    <input type="number" id="M" name="M" value="5000" required min="1" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="space-y-2">
                    <label for="D" class="block text-sm font-medium text-gray-700">D (Direction) - Primary CTA Clicks (e.g., 200)</label>
                    <input type="number" id="D" name="D" value="200" required min="1" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="space-y-2">
                    <label for="F" class="block text-sm font-medium text-gray-700">F (Friction) - Users Reaching Checkout/Trial (e.g., 50)</label>
                    <input type="number" id="F" name="F" value="50" required min="0" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                </div>
                <!-- M/D Alignment Signal (Copy) -->
                <div class="space-y-2">
                    <label for="M_D_Copy" class="block text-sm font-medium text-gray-700">M/D Alignment Signal - Raw Ad/Post Copy (Mandatory)</label>
                    <textarea id="M_D_Copy" name="M_D_Copy" rows="3" required class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 'Get Your Easy 3-Step Guide to Financial Freedom Today!'">Get Your Easy 3-Step Guide to Financial Freedom Today!</textarea>
                </div>
                
                <button type="submit" id="diagnose-btn" class="w-full p-3 bacs-cta text-white font-bold rounded-lg hover:bg-blue-700 transition">
                    Diagnose Structural Integrity & Generate Fix
                </button>
            </form>
        </div>
        
        <!-- Loading Indicator -->
        <div id="loading-indicator" class="hidden text-center p-6 text-xl font-bold text-blue-600">
            <svg class="animate-spin h-8 w-8 mr-3 inline text-blue-500" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Running BACS Engine...
        </div>

        <!-- Result Section (Starts Hidden) -->
        <div id="result-section" class="hidden space-y-8 pt-6 border-t border-gray-200">
            <h2 class="text-3xl font-extrabold text-gray-900 text-center">BACS Audit Report: Full Diagnosis (Free)</h2>
            
            <!-- Full Diagnosis (Free Content) -->
            <div id="full-diagnosis" class="space-y-6">
                
                <!-- Score Summary (VISUALLY ENHANCED) -->
                <div id="score-summary" class="text-center p-6 rounded-xl shadow-xl border-b-4 transform hover:scale-[1.01] transition duration-300">
                    <p class="text-xl font-extrabold text-white">FINAL BACS STRUCTURAL SCORE</p>
                    <p id="final-score" class="text-8xl font-black mt-1 text-white"></p>
                    <p id="final-status" class="text-2xl font-bold mt-2 text-white uppercase tracking-wider"></p>
                </div>

                <!-- II. Core Diagnosis (Block) -->
                <div class="diagnosis-card">
                    <div class="header-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        II. Core Diagnosis: Isolating the Complexity Barrier (F)
                    </div>
                    <p class="text-gray-700">The drop-off rate between Direction (D) and Friction (F) is <span id="drop-off-rate" class="font-bold text-red-600"></span>. This confirms a structural leak costing committed engagement.</p>
                    <p id="complexity-barrier" class="text-lg font-extrabold mt-3 p-3 bg-red-100 rounded-lg border-l-4 border-red-600 text-red-800 shadow-inner"></p>
                </div>
                
                <!-- III. M/D Alignment Analysis (Block - CONVINCING) -->
                <div class="diagnosis-card">
                    <div class="header-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"></path><path d="M10 16L12 18L14 16"></path><path d="M12 22V18"></path></svg>
                        III. M/D Alignment Analysis: The Copy-to-Conversion Gap
                    </div>
                    <div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-lg mb-4 shadow-sm">
                        <p class="text-sm font-semibold text-gray-700 mb-2">Original Copy Signal Submitted:</p>
                        <p id="submitted-copy" class="text-base italic text-gray-900 whitespace-pre-wrap"></p>
                    </div>
                    <p class="text-sm font-semibold text-blue-800 mb-1">Integrated Diagnosis & Structural Breach:</p>
                    <p id="md-alignment-diagnosis" class="text-base font-medium p-3 bg-blue-100 border-l-4 border-blue-600 rounded-lg"></p>
                </div>
                
                <!-- VII. Budget Justification Strategy (Block - FREE) -->
                   <div class="diagnosis-card">
                    <div class="header-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><line x1="12" y1="12" x2="12" y2="12"></line></svg>
                        VII. Budget Justification Strategy
                    </div>
                    <p id="budget-justification" class="text-gray-700 mt-2 p-3 bg-gray-100 border-l-4 border-gray-400 rounded-lg"></p>
                </div>

                <!-- LEAD CAPTURE: Forward Diagnosis to Email (FREE) -->
                <div class="mt-6 p-4 bg-yellow-50 rounded-lg space-y-3 border-l-4 border-yellow-500 shadow-md">
                    <p class="text-xl font-extrabold text-yellow-900 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Secure Your Free Audit Report via Email
                    </p>
                    <p class="text-sm text-gray-600">Enter your email to receive a PDF copy of this **Critical Diagnosis** immediately. **(Free Lead Capture)**</p>
                    <form id="email-forward-form" class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <input type="email" id="email-input" placeholder="you@company.com" required class="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <button type="submit" class="p-3 bacs-cta text-white font-bold rounded-lg hover:bg-blue-700 transition">Send Free Report</button>
                    </form>
                    <p id="email-status" class="text-sm text-green-700 hidden font-semibold"></p>
                </div>


                <!-- VI. GATED SOLUTION ACCESS (Paywalls) -->
                <h3 class="text-2xl font-bold text-gray-900 text-center mt-8">VI. Unlock the Anti-Anxiety Fix (Solution)</h3>
                
                <!-- VI. A. SACC Upsell (CONDITIONAL FOR CRITICAL <= 3) -->
                <div id="sacc-upsell" class="hidden p-6 rounded-xl critical-alert text-center shadow-2xl mt-4 border-4 border-red-700">
                    <p class="text-2xl font-extrabold text-red-900">🚨 CRITICAL FAILURE MANDATE 🚨</p>
                    <p class="text-red-800 mt-2 text-xl font-medium">Your score requires immediate, surgical intervention. **Wasted Engagement is critical.**</p>
                    <p class="text-3xl font-extrabold mt-4 text-orange-700">Initiate the <span class="text-orange-900">$397 Specialty Appointment Certainty Coordination</span> Call NOW.</p>
                    <button id="sacc-unlock-btn" class="w-full mt-4 p-4 sacc-cta text-white font-bold rounded-lg shadow-xl text-xl unlock-button">
                        Secure Immediate SACC Engagement & Structural Fix
                    </button>
                </div>

                <!-- VI. B. GENERIC PAYWALL (FOR MODERATE/SOUND SCORES > 3) -->
                <div id="fix-paywall" class="hidden mt-4 p-6 rounded-xl border-4 border-yellow-500 bg-yellow-50 shadow-inner text-center space-y-4">
                    <p class="text-2xl font-extrabold text-gray-900">🔒 Structural Fix Content Locked</p>
                    <p class="text-lg text-gray-700 font-medium">You have the **Diagnosis (Problem)**. Now secure the **Anti-Anxiety Fix (Solution)**.</p>
                    <p class="text-xl font-bold text-red-600">Unlock the Fix Mandate, Refined Copy Strategy, and the immediate **$500-$1000 Earning Goal** checklist.</p>
                    <button id="fix-unlock-btn" class="w-full p-4 sacc-cta text-white font-bold rounded-lg shadow-xl text-xl unlock-button">
                        Initiate Refinement Coordination & Unlock Fix ($750 Immediate Fee)
                    </button>
                </div>


                <!-- GATED CONTENT (Hidden until payment) -->
                <div id="section-iv-gated" class="hidden">
                    <div class="mt-6 diagnosis-card bg-blue-50 border-blue-400">
                        <div class="header-title text-blue-800 border-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            IV. Refined M/D Copy Strategy (The Anti-Anxiety Fix)
                        </div>
                        <p class="text-sm font-semibold text-blue-800 mb-2">Refined Copy to Increase Conversion Certainty:</p>
                        <p id="refined-copy" class="text-base font-extrabold text-blue-900 mb-4 whitespace-pre-wrap p-2 bg-blue-100 rounded-lg"></p>
                        <p class="text-sm font-semibold text-blue-800 mb-1">Strategy Justification (How this fixes M/D Alignment):</p>
                        <p id="refined-strategy" class="text-base text-gray-700"></p>
                    </div>
                </div>


                <div id="section-v-gated" class="hidden">
                    <div id="mandate-section" class="diagnosis-card">
                        <div class="header-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                            V. The Anti-Anxiety Fix Mandate (Checklist)
                        </div>
                        <div id="checklist-content" class="mt-3 p-4 rounded-lg bg-white border border-gray-200"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
        const form = document.getElementById('bacs-form');
        const diagnoseBtn = document.getElementById('diagnose-btn');
        const resultSection = document.getElementById('result-section');
        const loadingIndicator = document.getElementById('loading-indicator');
        const fullDiagnosis = document.getElementById('full-diagnosis');
        const saccUpsell = document.getElementById('sacc-upsell');
        const fixPaywall = document.getElementById('fix-paywall');
        const sectionIVGated = document.getElementById('section-iv-gated');
        const sectionVGated = document.getElementById('section-v-gated');
        const emailForm = document.getElementById('email-forward-form');
        const emailStatus = document.getElementById('email-status');
        
        // Unlock buttons
        const saccUnlockBtn = document.getElementById('sacc-unlock-btn');
        const fixUnlockBtn = document.getElementById('fix-unlock-btn');

        let lastScore = null;
        
        // --- API ENDPOINT CONFIGURATION ---
        // !!! IMPORTANT: THIS IS THE FINAL, LIVE VERCELL FUNCTION URL !!!
        const API_ENDPOINT = 'https://bacs-diagnostics-engine.vercel.app/api/diagnose'; 

        /**
         * Function to update the DOM with results returned from the API.
         * @param {Object} data - The JSON response from the serverless function.
         */
        function renderResults(data) {
            lastScore = data.finalScore; // Store the score for unlock logic

            // --- Update Full Diagnosis Content (FREE) ---
            const colorClass = data.scoreColor.replace('bacs-bg-primary', '').trim(); // Remove generic class
            
            document.getElementById('final-score').textContent = data.finalScore.toFixed(1);
            document.getElementById('final-status').textContent = data.status;
            // Update score summary block with dynamic color returned from API
            document.getElementById('score-summary').className = `text-center p-6 rounded-xl shadow-xl border-b-4 transform hover:scale-[1.01] transition duration-300 bacs-bg-primary ${colorClass}`;
            
            // Section II
            document.getElementById('drop-off-rate').textContent = data.dropOffRate;
            document.getElementById('complexity-barrier').textContent = data.complexity;
            
            // Section III (M/D Analysis - CONVINCING)
            document.getElementById('submitted-copy').textContent = data.submittedCopy;
            document.getElementById('md-alignment-diagnosis').textContent = data.mdAnalysis;

            // Section VII (Budget Justification)
            document.getElementById('budget-justification').innerHTML = data.justification;

            // --- Update GATED Content (always done, but only visible if unlocked) ---
            document.getElementById('refined-copy').textContent = data.refinedCopy;
            document.getElementById('refined-strategy').textContent = data.refinedStrategy;
            document.getElementById('checklist-content').innerHTML = data.checklistHTML;
            
            // --- GATING LOGIC ---
            // Hide any previous paywall success message
            const existingSuccess = fullDiagnosis.querySelector('.bg-green-100');
            if (existingSuccess) existingSuccess.remove();

            // Check if content is already unlocked (to prevent re-hiding after unlock)
            const isUnlocked = !sectionIVGated.classList.contains('hidden');

            // Show appropriate paywall based on score
            if (data.finalScore <= 3) {
                saccUpsell.classList.remove('hidden');
                fixPaywall.classList.add('hidden'); 
            } else {
                saccUpsell.classList.add('hidden');
                fixPaywall.classList.remove('hidden'); 
            }
            
            // Ensure gated content is hidden UNLESS already unlocked
            if (!isUnlocked) {
                sectionIVGated.classList.add('hidden');
                sectionVGated.classList.add('hidden');
            }

            // Show result section
            resultSection.classList.remove('hidden');
        }

        /**
         * Function to perform the simulated unlock
         */
        function unlockGatedContent(buttonContainer, successMessage) {
            // 1. Hide the paywall container
            buttonContainer.classList.add('hidden');
            
            // 2. Show the gated content sections
            sectionIVGated.classList.remove('hidden');
            sectionVGated.classList.remove('hidden');

            // 3. Display success message
            const successDiv = document.createElement('div');
            successDiv.className = 'p-4 bg-green-100 text-green-800 rounded-lg font-bold mt-4 text-center shadow-md';
            successDiv.textContent = successMessage;
            
            const existingSuccess = fullDiagnosis.querySelector('.bg-green-100');
            if (existingSuccess) existingSuccess.remove(); // Remove old one if exists

            fullDiagnosis.insertBefore(successDiv, sectionIVGated); 

            // 4. Scroll to the new content
            sectionIVGated.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Hide the other paywall too
            if (buttonContainer.id === 'sacc-upsell') {
                fixPaywall.classList.add('hidden');
            } else if (buttonContainer.id === 'fix-paywall') {
                saccUpsell.classList.add('hidden');
            }
        }
        
        // --- EVENT LISTENERS ---

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Gather input data
            const M = parseInt(document.getElementById('M').value);
            const D = parseInt(document.getElementById('D').value);
            const F = parseInt(document.getElementById('F').value);
            const M_D_Copy = document.getElementById('M_D_Copy').value;
            
            // Input validation before API call
            if (D === 0) {
                // Using a custom visual message instead of alert()
                const errorDiv = document.createElement('div');
                errorDiv.className = 'p-3 critical-alert rounded-lg mt-2 text-sm';
                errorDiv.textContent = 'Error: D (Direction) must be greater than 0 for analysis.';
                form.insertBefore(errorDiv, diagnoseBtn);
                setTimeout(() => errorDiv.remove(), 5000);
                return;
            }

            // Show loading, disable button, hide old results
            loadingIndicator.classList.remove('hidden');
            diagnoseBtn.disabled = true;
            resultSection.classList.add('hidden');

            try {
                // API Call to Serverless Function
                const response = await fetch(API_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ M, D, F, M_D_Copy })
                });

                if (!response.ok) {
                    throw new Error(`API error: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                
                // Render results received from the secure backend
                renderResults(data);

                window.scrollTo({ top: document.getElementById('diagnostic-card').offsetTop, behavior: 'smooth' });

            } catch (error) {
                // Display error message
                console.error("Diagnostic Engine Failure:", error);
                const errorDiv = document.createElement('div');
                errorDiv.className = 'p-4 critical-alert rounded-lg font-bold mt-4 text-center shadow-md';
                errorDiv.textContent = `CRITICAL ERROR: Diagnostic failed. Please check the console for API details. (Endpoint: ${API_ENDPOINT})`;
                fullDiagnosis.parentNode.insertBefore(errorDiv, fullDiagnosis);
                resultSection.classList.remove('hidden');
            } finally {
                // Hide loading, enable button
                loadingIndicator.classList.add('hidden');
                diagnoseBtn.disabled = false;
            }
        });
        
        // Email Forward Form Handler (Placeholder for Lead Capture)
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-input').value;
            
            emailStatus.textContent = `Success! The free diagnosis report has been sent to ${email}. Check your inbox for the immediate structural analysis!`;
            emailStatus.classList.remove('hidden');
            
            const sendButton = emailForm.querySelector('button');
            const emailInput = document.getElementById('email-input');

            if(sendButton) sendButton.disabled = true;
            if(emailInput) emailInput.disabled = true;

            setTimeout(() => {
                emailStatus.classList.add('hidden');
                if(sendButton) sendButton.disabled = false;
                if(emailInput) emailInput.disabled = false;
            }, 5000);
        });

        // Event listener for SACC Unlock Button (Simulated Paywall)
        if(saccUnlockBtn) {
            saccUnlockBtn.addEventListener('click', function() {
                unlockGatedContent(saccUpsell, 'SACC Engagement Confirmed! Anti-Anxiety Fix Mandate Unlocked.');
            });
        }
        
        // Event listener for Generic Fix Unlock Button (Simulated Paywall)
        if(fixUnlockBtn) {
            fixUnlockBtn.addEventListener('click', function() {
                unlockGatedContent(fixPaywall, 'Refinement Coordination Confirmed! Anti-Anxiety Fix Mandate Unlocked.');
            });
        }
    </script>
</body>
</html>
