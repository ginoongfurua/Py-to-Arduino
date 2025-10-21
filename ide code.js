int led1 = 4;
int led2 = 5;
int led3 = 6;
int led4 = 7;
int led5 = 8;

void setup() {
  Serial.begin(9600);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  pinMode(led5, OUTPUT);

}

void loop() {
  while(Serial.available() > 0){
    String receivedData = Serial.readStringUntil('\n');
    if(receivedData == "EXIT"){
      break;
    } else if(receivedData == "A"){
      {digitalWrite(led1, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);}
      delay(200);
      {digitalWrite(led2, HIGH);
      digitalWrite(led1, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);}
      delay(200);
      {digitalWrite(led3, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);}
      delay(200);
      {digitalWrite(led4, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led5, LOW);}
      delay(200);
      {digitalWrite(led5, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led1, LOW);}
      delay(200);
    } else if(receivedData == "B"){
      digitalWrite(led1, HIGH);
      digitalWrite(led5, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led2, LOW);
      delay(200);
      digitalWrite(led2, HIGH);
      digitalWrite(led4, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led5, LOW);
      digitalWrite(led1, LOW);
      delay(200);
      digitalWrite(led3, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led5, LOW);
      delay(200);
    }else if(receivedData == "C"){
      digitalWrite(led1, HIGH);
      digitalWrite(led3, HIGH);
      digitalWrite(led5, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led4, LOW);
      delay(200);
      digitalWrite(led2, HIGH);
      digitalWrite(led4, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led5, LOW);
      digitalWrite(led1, LOW);
      delay(200);
    }else if(receivedData == "D"){
      digitalWrite(led3, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led5, LOW);
      delay(200);
      digitalWrite(led2, HIGH);
      digitalWrite(led4, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led5, LOW);
      digitalWrite(led1, LOW);
      delay(200);
      digitalWrite(led1, HIGH);
      digitalWrite(led5, HIGH);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led2, LOW);
      delay(200);
    }else if(receivedData == "E"){
      digitalWrite(led5, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led1, LOW);
      delay(100);
      digitalWrite(led3, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      delay(100);
      digitalWrite(led1, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      delay(100);
      digitalWrite(led4, HIGH);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led1, LOW);
      digitalWrite(led5, LOW);
      delay(100);
      digitalWrite(led2, HIGH);
      digitalWrite(led1, LOW);
      digitalWrite(led3, LOW);
      digitalWrite(led4, LOW);
      digitalWrite(led5, LOW);
      delay(100);
    } else{
      printf("INVALID");
    }
  }
}