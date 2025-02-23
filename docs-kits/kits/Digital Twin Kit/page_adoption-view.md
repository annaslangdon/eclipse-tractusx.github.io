---
id: Adoption View Digital Twin Kit
title: Adoption View
description: 'Digital Twin Kit'
sidebar_position: 2
---

<!--
Adoption View of the Kit.
-->

<!-- !Mandatory! -->
## Vision & Mission

### Vision

The aim of the Digital Twin Kit is to trace parts and materials across the entire value chain to enable data driven use 
cases over all n-tier levels without compromising data sovereignty. This Kit enables data and app providers to deliver 
solutions for building data chains and to send quality notifications on all levels and industries.

To provide the Catena-X Automotive Network with a uniform infrastructure to enable data-level interoperability between
Business Partners is the purpose of the Digital Twin Kit. Regardless of the data's provenance, the Kit sets the scene
for a comprehensive landscape of distributed Digital Twins of assets (mostly parts) along the entire lifecycle of the
supply chain.

### Mission

The Digital Twin Kit bundles the necessary standards, APIs, interaction patterns and reference implementations on how
to build a Digital Twin for an asset. By adopting established standards and integrating them, the Digital Twin Kit leverages
the conceptual and implementation work of existing communities while contributing feedback and Open-Source-Contributions
back to the public. A priority is the seamless integration with other Catena-X developments such as the
[Connector Kit](https://eclipse-tractusx.github.io/docs-kits/category/connector-kit).

### Customer Journey

With the Digital Twin Kit, all roles mentioned in the [Operating Model Whitepaper](https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Model_Whitepaper_02_12_22.pdf) 
are given the necessary tooling to format their data and APIs in a standardized manner.

<!-- !Mandatory! -->
## Business Value

Point-to-Point integration between Business Partners is challenging. On the one hand, all questions of sovereignty, 
authorization, authentication must be agreed upon and implemented. That is covered by the 
[Connector Kit](https://eclipse-tractusx.github.io/docs-kits/category/connector-kit) and the
services it relies on. What this Kit adds is a set of technologies that reduce the integration efforts on the 
data level. Data Consumers can develop their applications against data formats that are standardized and reuse 
them independent of whom they will consume the data from. This reduces the necessary investment significantly 
and saves a network-participant from a strict link between the application and the data model. 
Consuming applications can be substituted seamlessly if they are developed against the
relevant Catena-X standards - further lowering the bar of entry for new applications in the CX-Ecosystem.

<!-- !Mandatory! -->
## Use Case

### Status Quo / Today’s challenge

This Kit's aim is not to solve a dedicated business problem. It is an infrastructure component, critical for scalable
data sharing and integration. It does however deliver a broad set of capabilities that the use cases can leverage.

- Well-defined API structure extensible by domain models. Each use case will want to share different data and the API
expands with the scope of the model.

- A distributed infrastructure of central and decentral components integrating hand-in-hand with backend-systems southward
and the network northward.

- Extensive meta-model to create a virtual representation of asses across their entire lifecycle.

### Example

The [Traceability Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Traceability%20Kit/Adoption%20View%20Traceability%20Kit#logic--schema) 
and the [Data Chain Kit](https://eclipse-tractusx.github.io/docs-kits/kits/Data%20Chain%20Kit/Documentation/irs_arc42) 
build on Digital Twins and leverage many of this Kit's content. The Data Chain Kit would be unimagineable without the 
pre-defined endpoint- and payload-definition that is the Digital Twin Kit. Likewise,
coupling the chains' elements would be impossible without a unified hierarchical structure running with all participants.
For more info how specifically the Asset Administration Shell is used, consult the Kits.

## Additional Resources

### CX-Standards

- [CX - 0001 EDC Discovery API](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/9_Data-Discovery-Services/CX_-_0001_EDC_DISCOVERY_API_PlatformCapabilityDS_v_1.0.1-1.pdf)
- [CX - 0002 Digital Twins in Catena-X](https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Archiv/Update_Juli_23_R_3.2/CX-0002-DigitalTwinsInCatena-X-v.1.0.2.pdf)
- CX - 0053 BPN Discovery Services *(will be released publicly with R3.2 in ca 09/23)*

### Terminology 

The following figure is borrowed from the upcoming R3.2 release of "Digital Twins in Catena-X" standard. It is
non-normative and shall only serve as a visual orientation for readers.
![How words relate in the DT Kit](assets/img/DTKIT_terminology.svg)
