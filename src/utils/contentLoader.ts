/**
 * Content Loader Utility
 * 
 * Loads content from JSON files managed by Decap CMS.
 * Files are stored in /public/content/ and accessed at runtime via fetch.
 */

interface Event {
  id: number;
  title: string;
  description: string;
  date: {
    from: string;
    to: string;
  };
  image: string;
  link: string;
}

/**
 * Load all events from the content/events folder
 * This function fetches the event files dynamically at runtime
 */
export const loadEvents = async (): Promise<Event[]> => {
  try {
    // List of event files - in production, you might want to generate this manifest
    // For now, we'll use a hardcoded list based on existing events
    const eventFiles = [
      '2025-03-08-ladies-fellowship-in-person.json',
      '2025-03-29-men-s-fellowship.json',
      '2025-04-05-all-night-prayer.json',
      '2025-04-12-ladies-fellowship-online.json',
      '2025-04-18-easter-conference.json',
      '2025-04-18-easter-conference-youth.json',
      '2025-05-03-ladies-fellowship-in-person.json',
      '2025-06-07-ladies-fellowship-in-person.json',
      '2025-06-15-helsinki-conference.json',
      '2025-07-05-ladies-fellowship-in-person.json',
      '2025-08-02-ladies-fellowship-in-person.json',
      '2025-09-13-ladies-fellowship-online.json',
      '2025-10-10-ladies-conference.json',
      '2025-11-08-ladies-fellowship-online.json',
      '2025-12-14-christmas-party.json',
    ];

    const events: Event[] = [];

    for (const file of eventFiles) {
      try {
        const response = await fetch(`/content/events/${file}`);
        if (response.ok) {
          const event = await response.json();
          events.push(event);
        }
      } catch (error) {
        console.warn(`Failed to load event file: ${file}`, error);
      }
    }

    return events;
  } catch (error) {
    console.error('Error loading events:', error);
    return [];
  }
};

/**
 * Alternative: Load events manifest
 * Generate a manifest.json file that lists all event files
 * This would be better for production but requires a build step
 */
export const loadEventsFromManifest = async (): Promise<Event[]> => {
  try {
    const manifestResponse = await fetch('/content/events/manifest.json');
    if (!manifestResponse.ok) {
      throw new Error('Manifest not found');
    }
    
    const manifest: string[] = await manifestResponse.json();
    const events: Event[] = [];

    for (const file of manifest) {
      try {
        const response = await fetch(`/content/events/${file}`);
        if (response.ok) {
          const event = await response.json();
          events.push(event);
        }
      } catch (error) {
        console.warn(`Failed to load event file: ${file}`, error);
      }
    }

    return events;
  } catch (error) {
    console.error('Error loading events from manifest:', error);
    return [];
  }
};
