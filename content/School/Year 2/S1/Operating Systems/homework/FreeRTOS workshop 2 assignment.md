---
tags:
  - school/operating-systems
  - operating-systems/freertos
  - language/dutch
  - taal/nederlands
  - school/homework
---
# Opdracht 1
Het doel van deze opdracht is om een task aan te maken met prioriteit 6. Iedere 4 seconden moet het text naar de console printen met zijn prioriteit. Iedere 8 seconden moet het zijn prioriteit met 1 verlagen en als deze 1 is moet de task verwijdert worden.

## Verwachting
iedere 4 seconden word er iets geprint, iedere 2 printjes word de prioriteit verlaagt totdat deze 1 is.

## Uitwerking

```arduino
uint8_t priority = 7;

void randomTask(void* pvParameter) {

  const TickType_t xDelay = 4000 / portTICK_PERIOD_MS;
  uint8_t counter = 0;

  while (1) {
    vTaskDelay(xDelay);

    Serial.print("Another 4 seconds passed, priority is: ");
    Serial.println(priority);

    if (priority == 1)
    {
      Serial.println("Task finished! ");
      break;
    }

    if (counter % 2 == 0)
    {
      priority--;
    }

    counter++;

  }

  vTaskDelete(NULL);
}

void setup() {
  Serial.begin(9600);
  xTaskCreate(&randomTask, "randomTask", 4096, NULL, priority, NULL);
}

void loop() {}
```

## Stappen
De stappen zijn:
1. de task word aangemaakt met een prioriteit van 6
2. de task print zijn status met de prioriteit
3. als de prioriteit 1 is, word de task gestopt
4. de counter gaat met 1 omhoog
5. als de counter even is word prioriteit met 1 verlaagt
6. de task wacht 4 seconden

## Output
De output is:<br>![[Vault-data/Attachments/FreeRTOS workshop 2 assignment 1.png]]

## Werkelijke output vs Verwachte output
De werkelijke output is anders dan wat er verwacht is. We moesten de prioriteit laten starten op 7, omdat er anders een prioriteit van 5 werd uitgeprint ipv 6.

## Conclusie
Iets in het starten van de task zorgt ervoor dat de prioriteit gelijk word verlaagt.

# Opdracht 2
Het doel van deze opdracht is 2 lampjes aansturen die beide op een aparte thread draaien (cpu 0 en 1).

CPU 0 heeft een rood lampje die 1 keer per seconde knippert (1 Hz).<br>CPU 1 heeft een groen lampje die 5 keer per seconde knippert (0.2 Hz).

Beide CPU’s hebben een aparte task die random text print in de console.

## Verwachting
We verwachten dat er op exacte tijden lampjes knipperen, en dat de random text geen impact gaat hebben daar op.

## Uitwerking
```arduino
#define RED_PIN 12
#define GREEN_PIN 27

uint8_t priority = 7;

void red(void* pvParameter) {

  const TickType_t xDelay = 1000 / portTICK_PERIOD_MS;
  uint8_t counter = 0;
  bool redOn = false;

  while (1) {
    vTaskDelay(xDelay);
    redOn = !redOn;
    digitalWrite(RED_PIN, redOn);
  }

  vTaskDelete(NULL);
}

void green(void* pvParameter) {

  const TickType_t xDelay = 200 / portTICK_PERIOD_MS;
  uint8_t counter = 0;
  bool greenon = false;

  while (1) {
    vTaskDelay(xDelay);
    greenOn = !greenOn;
    digitalWrite(GREEN_PIN, greenOn);
  }

  vTaskDelete(NULL);
}

uint8_t priority = 7;

void randomTask(void* pvParameter) {

  const TickType_t xDelay = 1000 / portTICK_PERIOD_MS;
  uint8_t counter = 0;

  while (1) {
    vTaskDelay(xDelay);
    Serial.println("text from core 0");
  }
  vTaskDelete(NULL);
}

void randomTask2(void* pvParameter) {

  const TickType_t xDelay = 200 / portTICK_PERIOD_MS;
  uint8_t counter = 0;

  while (1) {
    vTaskDelay(xDelay);
    Serial.println("text from core 1");
  }
  vTaskDelete(NULL);
}

void setup() {
  Serial.begin(9600);
  Serial.println(priority);

  ledcAttachPin(RED_PIN, 1);
  ledcAttachPin(GREEN_PIN, 2);

  xTaskCreatePinnedToCore(&red, "red", 4096, NULL, priority, NULL, 0);
  xTaskCreatePinnedToCore(&green, "green", 4096, NULL, priority, NULL, 1);
  xTaskCreatePinnedToCore(&randomTask1, "randomTask1", 4096, NULL, priority, NULL, 0); 
  xTaskCreatePinnedToCore(&randomTask2, "randomTask2, 4096, NULL, priority, NULL, 1); 
}

void loop() {}
```

## Stappen
1. alle 4 de tasks worden uitgevoerd
2. de ledjes worden met 1 en 0.2 Hz geknipperd
3. de tekst word tegelijk met het knipperen geprint naar de console

# Opdracht 3
Bij deze opdracht moesten we voorbeeld code op brightspace lezen en uitvoeren om te kijken wat er met een lcd gebeurt.
## Verwachting
De lcd word buiten de tasks gedefinieerd, de counters worden binnen de tasks gedetineerd, de counters zijn uniek voor iedere task.
Jelle denkt dat de ene task word uitgevoerd als de andere task in een delay zit, waardoor het beide goed loopt.<br>Thomas denkt dat door race conditions de cursor foutief word gezet, waardoor de teksten niet altijd op de juiste regels worden geprint.



