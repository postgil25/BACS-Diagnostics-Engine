/**
 * BACS Diagnostic Serverless Function
 * This function contains all the proprietary scoring and analysis logic,
 * making it invisible to the client-side user and securing the BACS Blueprint.
 * * Deployment Note: This file must be placed in an 'api' directory in your repo
 * and deployed using a service like Vercel or Netlify Functions.
 */

// --- BACS CORE LOGIC FUNCTIONS (IP Protected) ---

/**
 * Calculates the BACS Score based on Friction (F) and Direction (D).
 * The formula is heavily weighted toward the conversion rate between D and F (F/D Ratio).
 * @param {number} M - Motivation (Unique Visitors)
 * @param {number} D - Direction (Primary CTA Clicks)
 * @param {number} F - Friction (Users Reaching Checkout/Trial)
 * @returns {number} The calculated BACS Score (1.0 to 10.0)
 */
function calculateBACSScore(M, D, F) {
    // Safety check for division by zero (already checked on the client, but essential here)
    if (D === 0 || M === 0) return 1.0; 
    
    // F/D Ratio is the core metric for complexity leakage
    const F_to_D_Ratio = F / D;
    let score = F_to_D_Ratio * 10;
    
    // Cap score at 10 and set minimum floor at 1
    score = Math.max(1, Math.min(10, score));

    return Math.round(score * 10) / 10; // One decimal place
}

/**
 * Determines the Structural Status and color based on the BACS Score.
 * @param {number} score 
 * @returns {Object} Status, color, complexity description, and budget justification.
 */
function getStatusAndMandate(score) {
    let status, color, complexity, justification;
    const finalScore = score.toFixed(1);

    if (score <= 3) {
        status = "CRITICAL SCORE LEAK";
        color = "bg-red-600";
        complexity = "Complexity Barrier: Decision Paralysis & Cognitive Overload (Severe M/D Alignment Failure).";
        justification = `The BACS Score of **${finalScore}** is a **Critical Score Leak**, providing the definitive, quantitative Budget Justification for securing funding for the **BACS Prompt-to-Profit Diagnostic** solution in Q1. **Wasted Engagement** is the cost of inaction.`;
    } else if (score <= 6) {
        status = "MODERATE STRUCTURAL RISK";
        color = "bg-yellow-600";
        complexity = "Complexity Barrier: Misaligned Expectation & Moderate Form Friction (Refinement Required).";
        justification = `The BACS Score of **${finalScore}** provides **Feasibility Certainty** that the funnel is structurally sound (or moderately risky) before deploying major ad spend for Q4 Campaign Security.`;
    } else {
        status = "STRUCTURALLY SOUND";
        color = "bg-green-600";
        complexity = "Complexity Barrier: Minimal. Focus on maximizing P-Signal effectiveness and scaling M.";
        justification = `The BACS Score of **${finalScore}** provides **Feasibility Certainty** that the funnel is structurally sound (or moderately risky) before deploying major ad spend for Q4 Campaign Security.`;
    }

    return { status, scoreColor: color, complexity, justification };
}

/**
 * Section III: Simulated M/D Alignment Analysis (Proprietary Diagnosis)
 */
function getMDRootCause(score, copy, dropOff) {
    const submittedCopy = copy.trim().substring(0, 80) + (copy.trim().length > 80 ? '...' : '');

    if (score <= 3) {
        return `The BACS score of ${score.toFixed(1)} exposes a **Terminal M/D Alignment Breach**. Your submitted copy created an explicit **Low-Friction Certainty Signal** (M), which was immediately contradicted by the complexity required to proceed (F). This structural integrity failure is not a copywriting issue—it's a **Complexity Barrier** that costs you **${dropOff}** of committed revenue. This breach mandates immediate, surgical SACC intervention to re-establish Certainty.`;
    } else if (score <= 6) {
        return `The score of ${score.toFixed(1)} suggests moderate **Expectation Misalignment**. Your ad copy ("${submittedCopy}") is effective at driving Motivation (M), but there's a slight disconnect with the complexity required at the Friction (F) step. Refinement is required to elevate the user's Motivation and precondition them better to avoid losing the **${dropOff}** drop-off.`;
    } else {
        return `The M/D Alignment appears **Structurally Sound**. Your copy ("${submittedCopy}") effectively sets the user's expectation, and the subsequent funnel stages confirm the friction experienced is within acceptable limits. Focus on scaling M (traffic).`;
    }
}

/**
 * Section IV: Refined Copy Generation (GATED)
 */
function getRefinedCopy(originalCopy, score) {
    let refinedCopy = originalCopy.trim();
    let strategy = "";

    if (score <= 3) {
        refinedCopy = `[COMPLEXITY BUSTER PITCH MANDATE]: Stop Leaking Revenue. Initiate Your BACS Prompt-to-Profit Diagnostic Call Now to Fix Your ${score.toFixed(1)}/10 Funnel Score. Guaranteed Structural Fix in 7 Days.`;
        strategy = "The **Critical Score Leak** mandates replacing vague promises with a single, high-certainty call-to-action (The Complexity Buster Pitch) that explicitly validates the user's anxiety and drives them toward the immediate SACC fix. This copy creates **urgency** and **certainty** to overcome Decision Paralysis.";
    } else if (score <= 6) {
        // Subtle change: replace general steps/guide with blueprint, and add a time limit
        refinedCopy = originalCopy.trim().replace(/Easy \d-Step Guide/, 'Validated, Comprehensive Blueprint');
        refinedCopy = refinedCopy.replace(/Today!|Now!/, 'In The Next 72 Hours.');
        if (refinedCopy === originalCopy.trim()) {
            refinedCopy = `Secure the Proven Blueprint for Financial Freedom: See the 3 Steps Required Now.`;
        }
        strategy = "The **Moderate Structural Risk** requires M/D Alignment Recalibration. The refined copy elevates the expectation of complexity by using words like 'Blueprint' and 'Required,' pre-conditioning the user for the subsequent form fields (F) and reducing the cognitive dissonance that caused the drop-off. This elevates **Motivation (M)**.";
    } else {
        // Subtle change: reinforce proof/scaling
        refinedCopy = originalCopy.trim().replace(/Guide|Steps/, 'Proven Blueprint');
        if (refinedCopy === originalCopy.trim()) {
            refinedCopy = `Get Your Proven Blueprint to Financial Freedom: Scale Your Results Today.`;
        }
        strategy = "The **Structurally Sound** score permits scaling. The refinement focuses on reinforcing the **P-Signal (Proof)** by using stronger language like 'Proven Blueprint' and 'Scale,' shifting the user focus from 'how-to' (Direction) to 'why-it-works' (Proof) to maximize conversion rate efficiency.";
    }

    return { refinedCopy, refinedStrategy: strategy };
}

/**
 * Section V: Checklist (GATED)
 */
function getChecklistHTML(score) {
    if (score <= 3) {
        return `
            <h4 class="text-lg font-bold text-red-700">1. Low Score (≤ 3) Checklist: The SACC Mandate</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>**IMMEDIATE**: Initiate the **Complexity Buster Pitch** (see Section IV) to eliminate Decision Paralysis.</li>
                <li>**INTEGRITY**: Data Pipeline Integrity Check: Verify high-value M signals are not being dropped.</li>
                <li>**CRITICAL**: Immediate SACC Engagement: Initiate the **$397 Specialty Appointment Certainty Coordination** call to translate this diagnosis into the full **BACS Prompt-to-Profit Diagnostic** strategy.</li>
            </ul>
        `;
    } else if (score <= 6) {
        return `
            <h4 class="text-lg font-bold text-yellow-700">2. Moderate Score (≤ 6) Checklist: The Refinement Mandate</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>**PROOF**: P-Signal Reinforcement: Place Proof (P) elements adjacent to high-Friction elements.</li>
                <li>**FRICTION**: Form Field Condensation: Reduce input fields on the F step by 40%.</li>
                <li>**M/D**: Implement the **Refined M/D Copy** from Section IV immediately.</li>
            </ul>
        `;
    } else {
         return `
            <h4 class="text-lg font-bold text-green-700">3. High Score (7-10) Checklist: The Scaling Mandate</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>**SCALING**: Focus on increasing M (traffic volume) and continuous P-Signal reinforcement.</li>
                <li>**EFFICIENCY**: Run A/B tests on headline clarity (D) to maximize conversion rate efficiency.</li>
                <li>**DOCUMENT**: Document the M/D Alignment Signal for future campaign cloning.</li>
            </ul>
        `;
    }
}

// --- SERVERLESS FUNCTION EXPORT (Vercel/Netlify Compatible) ---

module.exports = async (req, res) => {
    // Set headers for CORS (allows the GitHub Pages/HTML file to talk to the API)
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request (pre-flight check required by browsers)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    try {
        // Vercel/Netlify automatically parse the JSON body into req.body for POST requests.
        const { M, D, F, M_D_Copy } = req.body;

        // Input validation
        if (typeof M !== 'number' || typeof D !== 'number' || typeof F !== 'number' || !M_D_Copy || D === 0) {
            // Log the problematic body for internal debugging
            console.error("Invalid Request Body:", req.body);
            res.status(400).json({ error: 'Invalid input data. M, D, F must be numbers and D > 0. Copy is mandatory.' });
            return;
        }

        // 1. Calculate Core Score
        const finalScore = calculateBACSScore(M, D, F);

        // 2. Generate Free Diagnostics
        const { status, scoreColor, complexity, justification } = getStatusAndMandate(finalScore);
        const dropOffRate = ((D - F) / D * 100).toFixed(1) + '%';
        const mdAnalysis = getMDRootCause(finalScore, M_D_Copy, dropOffRate);

        // 3. Generate Gated Content (The IP)
        const { refinedCopy, refinedStrategy } = getRefinedCopy(M_D_Copy, finalScore);
        const checklistHTML = getChecklistHTML(finalScore);

        // 4. Return combined JSON object
        res.status(200).json({
            finalScore: finalScore,
            status,
            scoreColor,
            complexity,
            justification,
            dropOffRate,
            mdAnalysis,
            submittedCopy: M_D_Copy, 
            
            // GATED / PROTECTED CONTENT
            refinedCopy,
            refinedStrategy,
            checklistHTML
        });

    } catch (error) {
        console.error("BACS Execution Error:", error);
        res.status(500).json({ error: 'Internal BACS Diagnostic Engine Error.' });
    }
};
