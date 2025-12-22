# Our Wedding Website

## Project info

A static website serving as an invitation to our info. It invites the guests to the wedding & provides information about the event.

## ULRs

**Production URL**: TODO: Add this once deployed

## Development

Install Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Install the necessary dependencies.
npm i

# Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Deployment

Deplyoment managed by AWS Amplify. Every commit to main triggers a redeployment.

## Technologies used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Guest Personalization

The website supports personalized invitations based on URL parameters. Guest names are validated against an allowed list (stored in the backend) to ensure only authorized guests can access the invitation.

### URL Parameters

- `name1` - First guest name (optional)
- `name2` - Second guest name (optional)

### Example URLs

- `/?name1=Bob` - Personalized greeting for Bob
- `/?name1=Bob&name2=Luca` - Personalized greeting for Bob and Luca

If no guest name provided or the provided name does not exist in the preconfigured guest list, an error is displayed.

### Adding New Guest Names

Edit the `GUEST_LIST` constant in `/src/i18n/guestConstants.ts` to add or remove authorized guest names.

## TODO

Functionality

- Update the group code
- Update the RSVP link according to the language
- Add the full guest list
