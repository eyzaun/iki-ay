Project structure guide

This project follows a clean, topic-oriented structure under src/components. Canonical locations:

- ui/: Shared UI components (navigation, headers, etc.)
- templates/: Reusable view templates (e.g., SoruTemplate)
- konular/: Topic pages
  - temel-sozdizimi/
  - kontrol-yapilari/
  - diziler-dilimler/
- sorular/: Question pages grouped by topic
  - temel-sozdizimi/
  - kontrol-yapilari/
  - diziler-dilimler/
- haftalar/: Weekly overview pages (Hafta1..Hafta4)
- home/: Home page
- kaynaklar/: Resources page
- hackerrank/: Competitive programming strategy/content
- projeler/: Practice projects
- settings/: App-wide settings (e.g., SettingsPage)

Notes

- No legacy re-export stubs. Each component file is the source of truth.
- Avoid duplicate "pages" directories. All routable views live directly under the folders above.
- Keep shared code in utils/ and context/ at src/ level.
- When adding a new topic or question set, mirror the existing folder naming and route patterns.
