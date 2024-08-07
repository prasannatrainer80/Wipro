package com.example.demo;

import org.springframework.cloud.client.ServiceInstance;

import java.net.URI;
import java.util.Collections;
import java.util.Map;

public class DefaultServiceInstance implements ServiceInstance {

    private final String instanceId;
    private final String serviceId;
    private final URI uri;
    private final boolean secure;

    public DefaultServiceInstance(String instanceId, String serviceId, URI uri, boolean secure) {
        this.instanceId = instanceId;
        this.serviceId = serviceId;
        this.uri = uri;
        this.secure = secure;
    }

    @Override
    public String getInstanceId() {
        return instanceId;
    }

    @Override
    public String getServiceId() {
        return serviceId;
    }

    @Override
    public String getHost() {
        return uri.getHost();
    }

    @Override
    public int getPort() {
        return uri.getPort();
    }

    @Override
    public boolean isSecure() {
        return secure;
    }

    @Override
    public URI getUri() {
        return uri;
    }

    @Override
    public Map<String, String> getMetadata() {
        return Collections.emptyMap();
    }
}