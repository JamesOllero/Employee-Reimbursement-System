package team.obergollero.util;

import java.util.ArrayList;

public class EncryptionUtil {
    public static String finalScore(String password) {
        return EncryptionUtil.getScrabbleScore(EncryptionUtil.toPigLatin(password));
    }

    private static String getScrabbleScore(String string) {
        ArrayList<String> onePointList = new ArrayList<String>();
        ArrayList<String> twoPointList = new ArrayList<String>();
        ArrayList<String> threePointList = new ArrayList<String>();
        ArrayList<String> fourPointList = new ArrayList<String>();
        ArrayList<String> fivePointList = new ArrayList<String>();
        ArrayList<String> eightPointList = new ArrayList<String>();
        ArrayList<String> tenPointList = new ArrayList<String>();
        char[] onePoint = {'a','e','i','o','u','l','n','r','s','t','0','1','2','3','4','5','6','7','8','9'};
        for(int i=0;i<onePoint.length;i++) {
            onePointList.add(String.valueOf(onePoint[i]));
        }
        char[] twoPoint = {'d','g'};
        for(int i=0;i<twoPoint.length;i++) {
            twoPointList.add(String.valueOf(twoPoint[i]));
        }
        char[] threePoint = {'b','c','m','p'};
        for(int i=0;i<threePoint.length;i++) {
            threePointList.add(String.valueOf(threePoint[i]));
        }
        char[] fourPoint = {'f','h','v','w','y'};
        for(int i=0;i<fourPoint.length;i++) {
            fourPointList.add(String.valueOf(fourPoint[i]));
        }
        char[] fivePoint = {'k'};
        for(int i=0;i<fivePoint.length;i++) {
            fivePointList.add(String.valueOf(fivePoint[i]));
        }
        char[] eightPoint = {'j','x'};
        for(int i=0;i<eightPoint.length;i++) {
            eightPointList.add(String.valueOf(eightPoint[i]));
        }
        char[] tenPoint = {'q','z'};
        for(int i=0;i<tenPoint.length;i++) {
            tenPointList.add(String.valueOf(tenPoint[i]));
        }
        String stringLower = string.toLowerCase();
        char[] charArray = stringLower.toCharArray();
        int points = 0;
        String[] strArray = new String[charArray.length];
        for(int i=0;i<charArray.length;i++) {
            strArray[i]=String.valueOf(charArray[i]);
        }
        for(int i=0;i<strArray.length;i++) {
            if(onePointList.contains(strArray[i])) {
                points = points + 1;
            } else if(twoPointList.contains(strArray[i])) {
                points = points + 2;
            } else if(threePointList.contains(strArray[i])) {
                points = points + 3;
            } else if(fourPointList.contains(strArray[i])) {
                points = points + 4;
            } else if(fivePointList.contains(strArray[i])) {
                points = points + 5;
            } else if(eightPointList.contains(strArray[i])) {
                points = points + 8;
            } else if(tenPointList.contains(strArray[i])) {
                points = points + 10;
            } else {
                throw new IllegalArgumentException();
            }
        }
        Integer pointsObj = points;
        return pointsObj.toString();
    }

    private static String toPigLatin(String string){
        String[] wordsEng = string.split(" ");
        String[] wordsTrans = translator(wordsEng);
        String translatedPhrase = String.join(" ",wordsTrans);
        return translatedPhrase;
    }
    public static String[] translator(String[] english){
        String[] translated = new String[english.length];
        for(int i=0;i<english.length;i++){
            switch(english[i].charAt(0)){
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    translated[i] = translateVowel(english[i]);
                    break;
                case 'q':
                    translated[i] = translateQ(english[i]);
                    break;
                case 's':
                    if((english[i].charAt(1)=='c')&&(english[i].charAt(2)=='h')){
                        translated[i] = translateSch(english[i]);
                        break;
                    }
                case 't':
                    if(english[i].charAt(1)=='h'){
                        translated[i] = translateQ(english[i]);
                        break;
                    }
                default:
                    translated[i] = translateConsonant(english[i]);
            }
        }
        return translated;
    }
    public static String translateVowel(String string){
        char[] ay = {'a','y'};
        char[] array = string.toCharArray();
        char[] transArray = new char[array.length+2];
        for(int i=0;i<transArray.length;i++){
            if(i<array.length){
                transArray[i]=array[i];
            } else if(i==transArray.length-2) {
                transArray[i] = ay[0];
            } else if(i==transArray.length-1) {
                transArray[i] = ay[1];
            }
        }
        String translatedWord = String.valueOf(transArray);
        return translatedWord;
    }
    public static String translateQ(String string){
        char[] ay = {'a','y'};
        char[] array = string.toCharArray();
        char[] transArray = new char[array.length+2];
        for(int i=0;i<transArray.length;i++){
            if(i<array.length-2){
                transArray[i] = array[i+2];
            } else if(i==array.length-2){
                transArray[i] = array[0];
            } else if(i==array.length-1){
                transArray[i] = array[1];
            } else if(i==transArray.length-2) {
                transArray[i] = ay[0];
            } else if(i==transArray.length-1) {
                transArray[i] = ay[1];
            }
        }
        String translatedWord = String.valueOf(transArray);
        return translatedWord;
    }
    public static String translateSch(String string){
        char[] ay = {'a','y'};
        char[] array = string.toCharArray();
        char[] transArray = new char[array.length+2];
        for(int i=0;i<transArray.length;i++){
            if(i<array.length-3){
                transArray[i] = array[i+3];
            } else if(i==array.length-3){
                transArray[i] = array[0];
            } else if(i==array.length-2){
                transArray[i] = array[1];
            } else if(i==array.length-1){
                transArray[i] = array[2];
            } else if(i==transArray.length-2) {
                transArray[i] = ay[0];
            } else if(i==transArray.length-1) {
                transArray[i] = ay[1];
            }
        }
        String translatedWord = String.valueOf(transArray);
        return translatedWord;
    }
    public static String translateConsonant(String string){
        char[] ay = {'a','y'};
        char[] array = string.toCharArray();
        char[] transArray = new char[array.length+2];
        for(int i=0;i<transArray.length;i++){
            if(i<array.length-1){
                transArray[i]=array[i+1];
            } else if(i==array.length-1){
                transArray[i]=array[0];
            } else if(i==transArray.length-2) {
                transArray[i] = ay[0];
            } else if(i==transArray.length-1) {
                transArray[i] = ay[1];
            }
        }
        String translatedWord = String.valueOf(transArray);
        return translatedWord;
    }
}
