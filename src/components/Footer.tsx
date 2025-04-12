import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"    // Stacks content vertically on mobile
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="4"
        paddingX="16"
        gap="8"
        horizontal="space-between"    // Space between text and social icons
        vertical="center"
        mobileDirection="column"      // Stack content on mobile
      >
        <Flex 
          direction={{ default: 'row', s: 'column' }}  // Row on desktop, column on mobile
          gap={{ default: '1', s: '0' }}              // Different spacing for mobile/desktop
          horizontal="center"
          style={{ 
            textAlign: 'center', 
            fontSize: '11px',
            opacity: 0.8,
            lineHeight: { default: '1.5', s: '1.8' }  // Increased line height for mobile
          }}
        >
          {/* Copyright and name group - stays in row for both views */}
          <Flex direction="row" gap="1" style={{ marginBottom: { s: '2px', default: '0' } }}>
            <Text onBackground="neutral-weak" style={{ fontSize: 'inherit' }}>© {currentYear}</Text>
            <SmartLink href="/" style={{ textDecoration: 'none' }}>
              <Text style={{ color: '#4ade80', fontSize: 'inherit' }}>{person.name}</Text>
            </SmartLink>
          </Flex>

          {/* Footer text items - stack on mobile, inline on desktop */}
          <Text onBackground="neutral-weak" style={{ fontSize: 'inherit', marginBottom: { s: '4px', default: '0' } }}>
            • All Rights Reserved
          </Text>
          <Text onBackground="neutral-weak" style={{ fontSize: 'inherit', marginBottom: { s: '4px', default: '0' } }}>
            • Developed by Abdul Rehman
          </Text>
          <Text onBackground="neutral-weak" style={{ fontSize: 'inherit' }}>
            • Built with{" "}
            <SmartLink
              style={{ color: '#4ade80' }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Flex>

        {/* Social icons - centered on mobile, end-aligned on desktop */}
        <Flex gap="12" horizontal="center" style={{ marginTop: { s: '16px', default: '0' } }}>
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>

      {/* Mobile-only bottom spacing */}
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
