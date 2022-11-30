package com.bilkent.erasmus.embeddables;

import javax.persistence.Embeddable;
import java.util.Date;

@Embeddable
public class Signature {

    // signature will be taken as a image link --> alternative BufferedImage
    private String signature;
}
