# Nolasco_StudentProfile

ITCC 41 - Mobile Application Development
Activity 2: Basic Student Profile

A student profile app made with HTML, CSS and JavaScript, then compiled with
Apache Cordova and run on an Android emulator.

## Sections

- Header - profile picture, name, "About Myself" subtitle, navigation menu
- Navigation menu - About and Skills
- About - two paragraphs, interests, educational background, goals
- Skills - six skills with short descriptions
- Footer - copyright, name, current year

## Interaction

Tapping About or Skills switches between the two sections without reloading the
page. The selected button stays underlined. This is done in JavaScript by
hiding one section and showing the other, and by changing the class of the
buttons.

## How to run

```
cordova platform add android@13
cordova build android
cordova run android --emulator
```

## Screenshots

### About
![About](screenshots/about.png)

### Skills
![Skills](screenshots/skills.png)
