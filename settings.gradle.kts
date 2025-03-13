plugins {
    id("io.micronaut.application") version "3.0.0"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(platform("io.micronaut.logging:micronaut-logging-bom:1.3.0"))
    implementation("io.micronaut.logging:micronaut-logging")
    implementation("org.apache.logging.log4j:log4j-core")
    implementation("axios:axios:0.21.1")
    implementation("lodash:lodash:4.17.21")
    implementation("moment:moment:2.29.1")
    implementation("uuid:uuid:8.3.2")
}

application {
    mainClass.set("index.js")
}
