<script>



import MarkerMap from "./markerMap.vue";
import Overlays from "./overlays.vue";
import StreetView from "./streetView.vue";
import MapType from "./mapType.vue";

/**
 * Google-map component
 */
export default {
    components: {
           MarkerMap, Overlays, StreetView, MapType
    },
    data() {
        return {
            title: "Google Maps",
            items: [
                {
                    text: "Maps",
                    href: "/",
                },
                {
                    text: "Google Maps",
                    active: true,
                },
            ],
        };
    },

};
</script>

<template>
    <Layout>
        <div class="page-title-box">
            <BRow class="align-items-center">
              <BCol md="5">
                <PageHeader title="Maps" pagetitle="Google Maps" />
              </BCol>
              <BCol md="auto" class="ms-auto">
                <RightBar />
              </BCol>
            </BRow>
          </div>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Markers</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div id="gmaps-markers" class="gmaps">
                            <MarkerMap />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Overlays</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div id="gmaps-overlay" class="gmaps">
                            <Overlays />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Street View Panoramas</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div id="panorama" class="gmaps-panaroma">
                            <StreetView />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol lg="6">
                <BCard no-body>
                    <BCardHeader>
                        <BCardTitle class="mb-0">Map Types</BCardTitle>
                    </BCardHeader>

                    <BCardBody>
                        <div id="gmaps-types" class="gmaps">
                            <MapType />
                        </div>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>
