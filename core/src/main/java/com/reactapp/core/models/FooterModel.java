package com.reactapp.core.models;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = FooterModel.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "reactapp/components/footer";

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String text;
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String use;
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String logOut;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    protected String logOutUrl;

    public String getText() {
        return text;
    }

    public String getUse() {
        return use;
    }

    public String getLogOut() {
        return logOut;
    }

    public String getLogOutUrl() {
        return logOutUrl;
    }

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
