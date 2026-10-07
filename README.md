# Hallar

**[Live app](https://eca57d18247a343fe812.agent37.app)** · **[Official repository](https://github.com/Techkeyy/Hallar)**

Hallar helps product builders find public problems they can credibly help solve, then prepares useful evidence before engagement.

> Who can I actually help, and what useful work can I bring first?

## Proof before pitch

A keyword match does not earn an introduction. Hallar checks the actual product capability, the public problem and explicitly associated evidence. Rejected and insufficient-evidence outcomes are part of the product.

## The user flow

1. Paste a real public product page.
2. Analyze its actual content with OpenAI.
3. Correct the product brief: audience, capabilities, limitations and unknowns.
4. Start scouting through Agent37 and real Monid Reddit discovery.
5. Let Hallar reject weak fits and inspect eligible public assets with sandboxed Chromium.
6. Read the opportunity dossier: found problem, capability match, observed, inferred, suggested and limitations.
7. Open the original conversation. You decide whether to engage.

The researcher animation follows actual application stages. No guessed percentages or timed success sequence. Refresh reconnects to the same job.

## Official live validation

A fresh anonymous session through the deployed redesigned interface reviewed **12 real conversations: 1 qualified, 8 rejected, 3 insufficient**. Job d25a1b98-f273-4231-90b8-cdd919515967 ran on fresh Agent37 instance o8nwlkynpf. No terminal intervention was required during the successful journey.

The real search rediscovered a WordPress/Elementor staging case. New browser evidence at 2026-10-07T22:18:03.067Z recorded FCP 10.90 s, latest observed LCP 13.32 s and 35 blocking entries. The matched capability was per-page Remove Unused CSS. This is a scoped fit, not a promised fix.

Ten deployed UI checks passed, including real provider evidence, reduced motion, session isolation, mobile layout, refresh and worker cleanup. Eight focused security checks passed. Linux dependency install reported zero known vulnerabilities; production build and TypeScript passed. A 242-file remote configured-key scan found zero matches. Only application port3000 is public.

**Owner UAT remains pending.** The source action opened the correct original Reddit URL, but the automated browser reached Reddit's human-verification page. Original thread content has not been declared verified in that browser.

## Architecture and sponsor roles

One Next.js/TypeScript app/server runs inside Agent37. Filesystem sessions/jobs provide continuity on the retained host.

| Module/service | Actual role |
| --- | --- |
| Agent37 Hosting API | Execute a bounded private scout and retrieve its real result |
| Monid | Discover real Reddit conversations and bounded current replies |
| OpenAI Responses | Understand product content, judge capability fit, reason over measured proof |
| Playwright / Chromium / CDP | Collect public-asset timings, blocking resources and CSS rule-range coverage |
| app/ui | Guided brief, actual-stage researcher and selective dossier |
| lib/server.ts | Signed owner sessions, quotas, real analysis and Agent37 orchestration |
| worker/scout.ts | Discovery, validation, classification, browser check and proof |
| core/public-web.ts | Public destination validation, DNS pinning and guarded proxy |

Supabase and other social sources are not claimed. The only currently demonstrated social source is Reddit.

## Setup

Node24 and npm are used. Installed versions are locked in package-lock.json.

```sh
npm ci --ignore-scripts
npm run build
```

These commands were run successfully on the official Agent37 host. TypeScript is checked by the production build; npm run typecheck is also available.

For the full scout path, the app/server must run inside a private Agent37 instance in /home/node/hallar-app. Supply AGENT37_API_KEY, MONID_API_KEY and OPENAI_API_KEY as private, write-only runtime env values at instance creation. AGENT37_INSTANCE_ID is assigned by the platform. Never upload .env.local. Bind the app to port3000 and set HALLAR_ORIGIN to the actual public HTTPS origin before user access.

The server start uses the Next CLI, with hostname0.0.0.0. Publish only app port3000; management/debug/database interfaces stay private. Operator deployment tooling and raw evidence remain private in work/. The live link is the quickest path for judges; no API keys are needed in the browser.

Local UI development can use npm run dev. Local keys alone do not provide the hosted Agent37 execution context. The loopback/environment-gated ?review=1 interface is private visual review, not a public live-data fallback.

## Trust and limitations

- OpenAI judges fit; server checks constrain candidate/source/capability references, explicit asset association and measured evidence. Model judgment remains fallible.
- One desktop Chromium observation with a mobile-sized viewport, unthrottled CPU/network and cache disabled is not a physical-phone or production benchmark.
- CSS bytes outside used-rule ranges may be required by other interactions or breakpoints. No safely removable percentage or improvement is claimed.
- No plugin is applied and no outreach or prospect-site changes are sent.
- Existing optimizers require an authorized isolated trial, not blind stacking.
- Provider availability, inaccessible assets, bounded reply context and daily quotas can legitimately yield no qualified result.
- Every failure/restart scenario has not been certified. Raw provider data, credentials, logs, runtime files and sensitive screenshots are ignored.

## Build history and operator state

Official initial commit: 29f06172a08ec36c813f2dd79ca8b8e321d6716b, created with normal current timestamps at the owner-authorized official start. Existing preparation work is not represented as fabricated Git history. This official live validation uses new provider runs and measurements; no saved proof was replayed.

The fresh host is retained for owner UAT and submission/demo access at the inspected standard shape/rate, using existing starter credit. No purchase, subscription or automatic-top-up activation. Record eventual instance deletion when access is no longer required.

License has not been specified.
