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
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-xs" onBackground="neutral-strong" style={{ letterSpacing: '-0.02em' }}>
          <Text onBackground="neutral-weak">©{currentYear}</Text>
          <SmartLink href="/" style={{ textDecoration: 'none' }}>
            <Text paddingX="2" style={{ color: '#4ade80' }}>{person.name}</Text>
          </SmartLink>
          <Text onBackground="neutral-weak">
            Developed by using{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
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
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
