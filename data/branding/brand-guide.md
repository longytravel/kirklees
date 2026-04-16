# Kirklees College Brand Guide (Extracted)

## Logos
- **Master Logo (SVG):** `data/branding/logo.svg` — source: `https://www.kirkleescollege.ac.uk/wp-content/uploads/2020/03/Kirklees-College_Master-logo_RGB.svg`
- **Favicon (SVG):** `data/branding/favicon.svg` — source: `https://www.kirkleescollege.ac.uk/wp-content/uploads/2020/03/Kirklees-Fav-Icon.svg`
- **"What Will You Be" Logo (SVG):** `data/branding/what-will-you-be-logo.svg` — source: `https://www.kirkleescollege.ac.uk/wp-content/uploads/2024/01/What-Will-You-Be-Logo.svg`
- **Ofsted Good Badge:** `https://www.kirkleescollege.ac.uk/wp-content/uploads/2023/06/Ofsted_Good_GP_Colour.webp`
- **OG Image:** `https://www.kirkleescollege.ac.uk/wp-content/uploads/2020/05/default.webp`
- **Together We Are Mighty:** `https://www.kirkleescollege.ac.uk/wp-content/uploads/2024/02/Kirklees-Together-We-Are-Mighty.webp`

## Primary Colors
| Role | Hex | Usage (frequency on homepage) |
|------|-----|------|
| **Primary Dark Navy** | `#00264a` | 43 occurrences — main brand color, headers, navigation, dark backgrounds |
| **Primary Dark Navy Alt** | `#022749` | 26 occurrences — very close variant used in some sections |
| **Primary Teal/Cyan** | `#00abc1` / `#1BABBF` | Accent/CTA color, buttons, highlights |
| **Primary Green** | `#63ac5f` / `#65ab62` | Success states, secondary accent, buttons |
| **Red/Alert** | `#ca1d1d` / `#da322a` | Alert, error, emphasis color |

## Secondary/Neutral Colors
| Role | Hex |
|------|-----|
| White | `#ffffff` |
| Light grey bg | `#F5F5F5` / `#f9f9f9` |
| Mid grey bg | `#e9e9e9` / `#e5e5e5` / `#eeeeee` |
| Border grey | `#cdcdcd` / `#ddd` / `#ccc` |
| Dark grey text | `#515555` / `#444` / `#3a3a3a` |
| Slate/nav text | `#334054` |
| Black | `#000000` |
| Light blue | `#95bedd` / `#cbddeb` |

## Typography
| Font Family | Weight | Usage |
|-------------|--------|-------|
| **Avenir-Roman** | 400 | Body text, regular weight |
| **Avenir-Medium** | 400 (medium) | Subheadings, emphasis |
| **Avenir-MediumOblique** | 400 | Italic emphasis |
| **Avenir-Light** | 300 | Light text variants |
| **Avenir-Black** | 900 | Bold headings, CTAs |

Font files hosted at: `/wp-content/uploads/fonts/Avenir-*.woff2`

## Taglines
- "Creating Opportunities, Changing Lives"
- "What Will You Be?"
- "Together We Are Mighty"

## Social Media
- Facebook: https://www.facebook.com/kirkleescollege/
- Instagram: https://www.instagram.com/kirkleescollege/
- LinkedIn: https://www.linkedin.com/company/kirklees-college/
- TikTok: https://www.tiktok.com/@kirkleescollege
- Flickr: https://www.flickr.com/photos/71996901@N03/

## Tailwind CSS Theme Suggestion
```js
colors: {
  kirklees: {
    navy: '#00264a',
    'navy-dark': '#022749',
    teal: '#00abc1',
    'teal-light': '#1BABBF',
    green: '#63ac5f',
    'green-light': '#65ab62',
    red: '#ca1d1d',
    'blue-light': '#95bedd',
    'blue-pale': '#cbddeb',
    slate: '#334054',
    grey: {
      100: '#F5F5F5',
      200: '#eeeeee',
      300: '#e5e5e5',
      400: '#cdcdcd',
      500: '#515555',
      600: '#444444',
      700: '#3a3a3a',
    }
  }
}
```
